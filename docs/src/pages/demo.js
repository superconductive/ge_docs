import React from 'react';
import Select from 'react-select';


export const SectionHeader = ({title}) => (
  <h2>{title}</h2>
);


<SectionHeader title='Setup' />

class Article extends React.Component{
    shouldBeHidden() {
        return this.props.tags.some(tag => this.props.hiddenTags.includes(tag));
    }
    render() {
        return (
                <li style={{
                    display: this.shouldBeHidden() ? 'none' : 'block'
                }}>
                    <a href='#'>{this.props.title}</a> {this.props.tags.map((item) => (<em style={{fontSize: '0.7em', display: 'inline', margin: '3px', padding: '0 3px', color: '#fff', background: '#ccc'}}>{item}</em>))}
                </li>
        );
    }
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function removeItemsFromArray(items, array) {
    const itemsToRemove = new Set(items);
    return array.filter( item => !itemsToRemove.has(item) );
}


const installOptions = [
    { value: 'install-locally', label: 'locally' },
    { value: 'install-databricks', label: 'DataBricks' },
];
const metadataOptions = [
    { value: 'metadata-store-filesystem', label: 'filesystem' },
    { value: 'metadata-store-s3', label: 's3' },
    { value: 'metadata-store-azure', label: 'azure' },
    { value: 'metadata-store-gcs', label: 'gcs' },
    { value: 'metadata-store-database', label: 'database' },
];
const dataDocsOptions = [
    { value: 'datadocs-filesystem', label: 'filesystem' },
    { value: 'datadocs-s3', label: 's3' },
    { value: 'datadocs-azure', label: 'azure' },
    { value: 'datadocs-gcs', label: 'gcs' },
];

export default class TOC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenTags: [],
            installSelectedOption: null,
            metadataSelectedOption: null,
            dataDocsSelectedOption: null,
        };
        this.handleInstallChange = this.handleInstallChange.bind(this);
        this.handleMetadataStoreChange = this.handleMetadataStoreChange.bind(this);
        this.handleDataDocsChange = this.handleDataDocsChange.bind(this);
    }

    handleChange(event, options) {
        console.log('option selected', event.value);
        let hiddenTags = this.state.hiddenTags;
        const tags = options.map((item) => item.value);
        console.log('tags', tags);
        // remove all tags from hiddenTags
        hiddenTags = removeItemsFromArray(tags, hiddenTags)
        // add all options from hiddenTags
        hiddenTags = hiddenTags.concat(tags);
        // remove selected from hiddenTags
        hiddenTags = removeItemAll(hiddenTags, event.value)
        console.log('hiddenTags', hiddenTags);
        return hiddenTags;
    }

    handleInstallChange(event) {
        const hiddenTags = this.handleChange(event, installOptions);
        this.setState({ installSelectedOption: event.value, hiddenTags: hiddenTags });
    }

    handleMetadataStoreChange(event) {
        const hiddenTags = this.handleChange(event, metadataOptions);
        this.setState({ metadataSelectedOption: event.value, hiddenTags: hiddenTags });
    }
    handleDataDocsChange(event) {
        const hiddenTags = this.handleChange(event, dataDocsOptions);
        this.setState({ dataDocsSelectedOption: event.value, hiddenTags: hiddenTags });
    }

    reset() {
        console.log('resetting state');
        this.setState({
            hiddenTags: [],
            installSelectedOption: null,
            metadataSelectedOption: null,
            dataDocsSelectedOption: null,
        })
    }

    render() {
        return (
            <div style={{width: '1000px'}}>
                <p>hiddenTags: {this.state.hiddenTags.map((tag) => (tag + ", "))}</p>
                <p>installSelectedOption: {this.state.installSelectedOption}</p>
                <p>metadataSelectedOption: {this.state.metadataSelectedOption}</p>
                <p>dataDocsSelectedOption: {this.state.dataDocsSelectedOption}</p>

                <h1>Setup</h1>

                <ol>
                    <li>Where will you install Great Expectations? <Select
                        defaultValue={null}
                        // value={this.state.installSelectedOption}
                        onChange={this.handleInstallChange}
                        options={installOptions}
                        isSearchable={true}
                      />
                      </li>
                    <li>Where will you store your metadata? <Select
                        defaultValue={null}
                        // value={this.state.metadataSelectedOption}
                        onChange={this.handleMetadataStoreChange}
                        options={metadataOptions}
                        isSearchable={true}
                      />
                  </li>
                    <li>Where will you store and host your Data Docs? <Select
                        defaultValue={null}
                        // value={this.state.dataDocsSelectedOption}
                        onChange={this.handleDataDocsChange}
                        options={dataDocsOptions}
                        isSearchable={true}
                      />
                      </li>
                </ol>
                <button onClick={() => this.reset()}>Reset Questions</button>

                <br />
                <br />
                <h2>Installation</h2>
                <ol>
                    <Article title='How to install Great Expectations locally' tags={['install', 'install-locally']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to install Great Expectations in DataBricks' tags={['install', 'install-databricks']} hiddenTags={this.state.hiddenTags} />
                </ol>
                <h2>Configuration Type</h2>
                <ol>
                    <Article title='How to configure a DataContext in yaml' tags={['configure', 'yaml']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a DataContext in python code' tags={['configure', 'code', 'databricks']} hiddenTags={this.state.hiddenTags} />
                </ol>

                <h2>Configuring metadata stores</h2>
                <ol>
                    <Article title='How to configure an Expectation store in Amazon S3' tags={['metadata-store', 'metadata-store-s3']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure an Expectation store in Azure blob storage' tags={['metadata-store', 'metadata-store-azure']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure an Expectation store in GCS' tags={['metadata-store', 'metadata-store-gcs']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure an Expectation store on a filesystem' tags={['metadata-store', 'metadata-store-filesystem']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure an Expectation store to PostgreSQL' tags={['metadata-store', 'metadata-store-database']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a Validation Result store in Amazon S3' tags={['metadata-store', 'metadata-store-s3']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a Validation Result store in Azure blob storage' tags={['metadata-store', 'metadata-store-azure']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a Validation Result store in GCS' tags={['metadata-store', 'metadata-store-gcs']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a Validation Result store on a filesystem' tags={['metadata-store', 'metadata-store-filesystem']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a Validation Result store to PostgreSQL' tags={['metadata-store', 'metadata-store-database']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to configure a MetricsStore' tags={['metadata-store', ]} hiddenTags={this.state.hiddenTags} />
                </ol>

                <h2>Data Docs</h2>
                <ol>
                    <Article title='How to add comments to Expectations and display them in Data Docs' tags={['datadocs',]} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to Create Renderers for Custom Expectations' tags={['datadocs',]} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to host and share Data Docs on a filesystem' tags={['datadocs', 'datadocs-filesystem']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to host and share Data Docs on Azure Blob Storage' tags={['datadocs', 'datadocs-azure']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to host and share Data Docs on GCS' tags={['datadocs', 'datadocs-gcs']} hiddenTags={this.state.hiddenTags} />
                    <Article title='How to host and share Data Docs on Amazon S3' tags={['datadocs', 'datadocs-s3']} hiddenTags={this.state.hiddenTags} />
                </ol>

            </div>
        )
    }
};
