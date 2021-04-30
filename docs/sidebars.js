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
        'tutorials/getting-started/customize-your-deployment',
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
                'guides/setup/configuring-data-contexts/how-to-create-a-new-data-context-with-the-cli' ,
                'guides/setup/configuring-data-contexts/how-to-configure-datacontext-components-using-test_yaml_config' ,
                'guides/setup/configuring-data-contexts/how-to-use-a-yaml-file-or-environment-variables-to-populate-credentials' ,
                'guides/setup/configuring-data-contexts/how-to-populate-credentials-from-a-secrets-store' ,
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-without-a-yml-file' ,
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-on-an-emr-spark-cluster' ,
                'guides/setup/configuring-data-contexts/how-to-instantiate-a-data-context-on-databricks-spark-cluster',

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
                'guides/setup/configuring-metadata-stores/how-to-configure-a-metricsstore',
              ]
            },
            {
              type: 'category',
              label: 'Configuring Data Docs',
              items: [
                'guides/setup/configuring-data-docs/how-to-add-comments-to-expectations-and-display-them-in-data-docs' ,
                'guides/setup/configuring-data-docs/how-to-create-renderers-for-custom-expectations' ,
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-a-filesystem' ,
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-azure-blob-storage' ,
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-gcs' ,
                'guides/setup/configuring-data-docs/how-to-host-and-share-data-docs-on-amazon-s3',
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
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-pandas-filesystem-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-pandas-s3-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-spark-filesystem-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-self-managed-spark-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-an-emr-spark-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-databricks-aws-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-databricks-azure-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-an-athena-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-bigquery-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-mssql-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-mysql-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-redshift-datasource' ,
                'guides/connecting-to-data/configuring-a-datasource/how-to-configure-a-snowflake-datasource',
              ]
            },
            {
              type: 'category',
              label: 'Configuring a DataConnector',
              items: [
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' ,
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-a-configuredassetdataconnector' ,
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-an-inferredassetdataconnector' ,
                'guides/connecting-to-data/configuring-a-dataconnector/how-to-configure-a-data-connector-to-sort-batches',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '✅ Validating data with Checkpoints',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }
          ]
        },
        {
          type: 'category',
          label: 'Advanced Usage',
          items: [
            { type: 'doc', id: 'guides/connecting-to-data/configuring-a-dataconnector/how-to-choose-which-dataconnector-to-use' }
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
