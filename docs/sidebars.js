module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        { type: 'doc', id: 'intro' },
        { type: 'doc', id: 'why-use-ge' }
      ]
    },
    {
      type: 'category',
      label: 'Getting started with Great Expectations',
      items: [
        'tutorials/getting-started/intro',
        'tutorials/getting-started/initialize-a-data-context',
        'tutorials/getting-started/connect-to-data',
        'tutorials/getting-started/create-your-first-expectations',
        'tutorials/getting-started/set-up-data-docs',
        'tutorials/getting-started/validate-your-data',
        'tutorials/getting-started/customize-your-deployment'
      ]
    },
    {
      type: 'category',
      label: 'How to Guides',
      items: [
        {
          type: 'category',
          label: '⚙️ Setup',
          items: [
            {
              type: 'category',
              label: 'Installing',
              items: [
                'guides/setup/installing/local',
                'guides/setup/installing/databricks',
                'guides/setup/installing/spark-emr'
              ]
            },
            {
              type: 'category',
              label: 'Configuring Data Contexts',
              items: [
                'guides/setup/configuring-data-contexts/how-to-create-a-new-data-context-with-the-cli',
                'guides/setup/configuring-data-contexts/how-to-configure-datacontext-components-using-test_yaml_config',
                'guides/setup/configuring-data-contexts/how-to-use-a-yaml-file-or-environment-variables-to-populate-credentials',
                'guides/setup/configuring-data-contexts/how-to-populate-credentials-from-a-secrets-store',
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-without-a-yml-file',
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-on-an-emr-spark-cluster',
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-on-databricks-spark-cluster'

              ]
            },
            {
              type: 'category',
              label: 'Configuring metadata Stores',
              items: [
                'guides/setup/configuring-metadata-stores/how-to-configure-an-expectation-store-in-amazon-s3',
                'guides/setup/configuring-metadata-stores/how-to-configure-an-expectation-store-in-azure-blob-storage',
                'guides/setup/configuring-metadata-stores/how-to-configure-an-expectation-store-in-gcs',
                'guides/setup/configuring-metadata-stores/how-to-configure-an-expectation-store-on-a-filesystem',
                'guides/setup/configuring-metadata-stores/how-to-configure-an-expectation-store-to-postgresql',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-validation-result-store-in-amazon-s3',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-validation-result-store-in-azure-blob-storage',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-validation-result-store-in-gcs',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-validation-result-store-on-a-filesystem',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-validation-result-store-to-postgresql',
                'guides/setup/configuring-metadata-stores/how-to-configure-a-metricsstore'
              ]
            },
            {
              type: 'category',
              label: 'Configuring Data Docs',
              items: [
                'guides/setup/configuring-data-docs/how-to-add-comments-to-expectations-and-display-them-in-data-docs',
                'guides/setup/configuring-data-docs/how-to-create-renderers-for-custom-expectations',
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-a-filesystem',
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-azure-blob-storage',
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-gcs',
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-amazon-s3'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '🔌 Connecting to data',
          items: [
            {
              type: 'category',
              label: 'Configuring a Datasource',
              items: [
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-pandas-filesystem-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-pandas-s3-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-spark-filesystem-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-self-managed-spark-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-an-emr-spark-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-databricks-aws-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-databricks-azure-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-an-athena-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-bigquery-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-mssql-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-mysql-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-redshift-datasource',
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-snowflake-datasource'
              ]
            },
            {
              type: 'category',
              label: 'Configuring a DataConnector',
              items: [
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use',
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-a-configuredassetdataconnector',
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-an-inferredassetdataconnector',
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-a-data-connector-to-sort-batches'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '✅ Validating data',
          items: [
            {
              type: 'category',
              label: 'Creating and editing Expectations',
              items: [
                { type: 'doc', id: 'guides/expectations/how-to-create-a-new-expectation-suite-using-the-cli' },
                { type: 'doc', id: 'guides/expectations/how-to-create-a-new-expectation-suite-without-a-sample-batch' },
                { type: 'doc', id: 'guides/expectations/how-to-create-a-new-expectation-suite-without-the-cli' },
                { type: 'doc', id: 'guides/expectations/how-to-edit-an-expectation-suite-with-the-cli' },
                { type: 'doc', id: 'guides/expectations/how-to-edit-an-expectation-suite-without-the-cli' },
                { type: 'doc', id: 'guides/expectations/how-to-edit-an-expectation-suite-without-a-sample-batch' },
                { type: 'doc', id: 'guides/expectations/how-to-create-an-expectation-suite-with-the-user-configurable-profiler' },
                { type: 'doc', id: 'guides/expectations/how-to-create-a-new-expectation-suite-from-a-jsonschema-file' },
                { type: 'doc', id: 'guides/expectations/how-to-create-custom-expectations' },
                { type: 'doc', id: 'guides/expectations/how-to-create-custom-expectations-for-pandas' },
                { type: 'doc', id: 'guides/expectations/how-to-create-custom-expectations-for-spark' },
                { type: 'doc', id: 'guides/expectations/how-to-create-custom-expectations-for-sqlalchemy' },
                { type: 'doc', id: 'guides/expectations/how-to-create-expectations-that-span-multiple-batches-using-evaluation-parameters' },
                { type: 'doc', id: 'guides/expectations/how-to-contribute-a-new-expectation-to-great-expectations' },
                { type: 'doc', id: 'guides/expectations/how-to-create-parameterized-expectations-super-fast' },
                { type: 'doc', id: 'guides/expectations/how-to-dynamically-load-evaluation-parameters-from-a-database' }
              ]
            },
            {
              type: 'category',
              label: 'Creating and using Checkpoints for data validation',
              items: [
                { type: 'doc', id: 'guides/checkpoints/how-to-create-a-new-checkpoint' },
                { type: 'doc', id: 'guides/checkpoints/how-to-add-validations-data-or-suites-to-a-checkpoint' },
                { type: 'doc', id: 'guides/checkpoints/how-to-configure-a-new-checkpoint-using-test_yaml_config' },
                { type: 'doc', id: 'guides/checkpoints/how-to-run-a-checkpoint-in-terminal' },
                { type: 'doc', id: 'guides/checkpoints/how-to-run-a-checkpoint-in-python' },
                { type: 'doc', id: 'guides/checkpoints/how-to-run-a-checkpoint-in-airflow' },
                { type: 'doc', id: 'guides/checkpoints/how-to-deploy-a-scheduled-checkpoint-with-cron' },
                { type: 'doc', id: 'guides/checkpoints/how-to-store-validation-results-as-a-validation-action' },
                { type: 'doc', id: 'guides/checkpoints/how-to-update-data-docs-as-a-validation-action' },
                { type: 'doc', id: 'guides/checkpoints/how-to-trigger-email-as-a-validation-action' },
                { type: 'doc', id: 'guides/checkpoints/how-to-trigger-slack-notifications-as-a-validation-action' },
                { type: 'doc', id: 'guides/checkpoints/how-to-trigger-opsgenie-notifications-as-a-validation-action' },
                { type: 'doc', id: 'guides/checkpoints/how-to-implement-a-custom-validation-operator' },
                { type: 'doc', id: 'guides/checkpoints/how-to-implement-custom-notifications' },
                { type: 'doc', id: 'guides/checkpoints/how-to-validate-data-without-a-checkpoint' }

              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Advanced Usage',
          items: [
            { type: 'doc', id: 'guides/misc/how-to-configure-notebooks-generated-by-suite-edit' },
            { type: 'doc', id: 'guides/misc/how-to-use-the-project-check-config-command' },
            { type: 'doc', id: 'guides/misc/how-to-use-the-great-expectations-command-line-interface-(cli)' },
            { type: 'doc', id: 'guides/misc/how-to-add-support-for-a-new-sqlalchemy-dialect' },
            { type: 'doc', id: 'guides/misc/how-to-add-comments-to-a-page-on-docs.greatexpectations.io' },
            { type: 'doc', id: 'guides/misc/how-to-use-the-great-expectation-docker-images' },
            { type: 'doc', id: 'guides/misc/how-to-write-a-how-to-guide' },
            { type: 'doc', id: 'guides/misc/template-how-to-{stub}' },
            { type: 'doc', id: 'guides/misc/template-how-to-{do-something}' }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Reference',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }

          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Community Resources',
      items: [
        {
          type: 'category',
          label: 'Community',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }

          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {
          type: 'category',
          label: 'Contributingt',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }

          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Changelog',
      items: [
        {
          type: 'category',
          label: 'Changelog',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }

          ]
        }
      ]
    }
  ]
}
