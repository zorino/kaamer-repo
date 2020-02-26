import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import JSONData from "../data.json";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import MaterialTable, { MTableToolbar } from 'material-table';
import "./datatable.css";
import Tooltip from '@material-ui/core/Tooltip';
import DescriptionIcon from '@material-ui/icons/Description';

const JSONbuildtime = () => (

    <div style={{ margin: `1.45rem` }}>

      {/* <Paper> */}
      {/*   <Typography variant="h5" align="center" color="textSecondary" paragraph> */}
      {/*     Prebuilt kAAmer Databases Mostly for Microbial (Meta)Genomics */}
      {/*   </Typography> */}
      {/* </Paper> */}

      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <MaterialTable
        title="Database Tags"
        data={JSONData}
        options={{
            pageSize:10,
        }}
        style={{
            padding: `1.45rem`,
            maxWidth: `100%`,
        }}
        columns={[
            {
                title: 'Database/Version',
                field: 'name',
                render: row =>
                    <div>
                      <img src={row.favicon} width="20" style={{margin: `0 auto`, "vertical-align": `top`}}/>
                      <a href={row.url} style={{marginLeft: `0.2em`}}>
                        {row.name} / {row.version}
                      </a>
                    </div>
            },
            {
                title: 'Ref',
                field: 'reference',
                render: row =>
                    <div>
                      <a href={row.reference} target="_blank">
                        <DescriptionIcon color="primary"/>
                      </a>
                    </div>
            },
            {
                title: 'Size',
                field: 'size',
                type: 'string'
            },
            {
                title: 'Nb. Proteins',
                field: 'nb_proteins',
                type: 'numeric',
                render: row => row.nb_proteins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            {
                title: 'Nb. Kmers',
                field: 'nb_kmers',
                type: 'numeric',
                render: row => row.nb_kmers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            {
                title: 'Tags',
                field: 'tags',
                render: row =>
                    <div>
                      {row.tags.map(t => (
                          <Chip className={t}
                                label={t}
                          />
                      ))}
                    </div>
            },
        ]}
        components={{
            Toolbar: props => (
                <div>
                  <MTableToolbar {...props} />
                  <div style={{padding: '0px 10px'}}>
                    <Tooltip title="Metagenomics Associated Dataset">
                      <Chip label="Metagenomics" className="metagenomics" color="primary"/>
                    </Tooltip>
                    <Tooltip title="Genomics Generic Dataset (Annotation)">
                      <Chip label="Genomics" className="genomics" color="primary"/>
                    </Tooltip>
                    <Tooltip title="Clinically Relevant Protein Datasets">
                      <Chip label="Clinical" className="clinical" color="primary"/>
                    </Tooltip>
                  </div>
                </div>
            ),
        }}
      />

    </div>
);
export default JSONbuildtime;
