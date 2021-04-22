import os
import shutil
import subprocess

import pytest

from ..util import file_relative_path, execute_shell_command


integration_test_matrix = [
    {
        "name": "pandas_filesystem_golden_path",
        "base_dir": file_relative_path(__file__, "../../integration"),
        "data_context_dir": "fixtures/configured_asset_taxi_monthly/great_expectations",
        "data_dir": "fixtures/test_data",
        "user_flow_script": "code/golden_path.py"
    },
    # {
    #     "name": "sqlalchemy_golden_path",
    #     "base_dir": file_relative_path(__file__, "../../integration"),
    #     "data_context_dir": "fixtures/sqlalchemy/great_expectations",
    #     "data_dir": "fixtures/test_data",
    #     "user_flow_script": "code/golden_path.py"
    # }
]

def idfn(test_configuration):
    return test_configuration.get("name")


@pytest.mark.docs
@pytest.mark.integration
@pytest.mark.parametrize("test_configuration", integration_test_matrix, ids=idfn)
def test_docs(test_configuration, tmp_path):
    workdir = os.getcwd()
    try:
        os.chdir(tmp_path)
        base_dir = test_configuration.get("base_dir", ".")
        # Ensure GE is installed in our environment
        ge_requirement = test_configuration.get("ge_requirement", "great_expectations")
        execute_shell_command(f"pip install {ge_requirement}")

        #
        # Build test state
        #

        # DataContext
        context_source_dir = os.path.join(
            base_dir,
            test_configuration.get("data_context_dir")
        )
        test_context_dir = os.path.join(tmp_path, "great_expectations")
        shutil.copytree(
            context_source_dir,
            test_context_dir,
        )

        # Test Data
        source_data_dir = os.path.join(
            base_dir,
            test_configuration.get("data_dir")
        )
        test_data_dir = os.path.join(tmp_path, "test_data")
        shutil.copytree(
            source_data_dir,
            test_data_dir,
        )

        # UAT Script
        script_source = os.path.join(
            test_configuration.get("base_dir"),
            test_configuration.get("user_flow_script")
        )
        script_path = os.path.join(tmp_path, "test_script.py")
        shutil.copyfile(script_source, script_path)
        # Check initial state

        # Execute test
        res = subprocess.run(
            [
                "python",
                script_path
            ],
            capture_output=True
        )
        # Check final state
        outs = res.stdout.decode("utf-8")
        errs = res.stderr.decode("utf-8")
        print(outs)
        print(errs)
        assert len(errs) == 0
    except:
        raise
    finally:
        os.chdir(workdir)