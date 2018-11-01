/**
 *    SPDX-License-Identifier: Apache-2.0
 */
import format from '../../intlFormat';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import matchSorter from 'match-sorter';
import Dialog from '@material-ui/core/Dialog';
import ReactTable from '../Styled/Table';
import ChaincodeForm from '../Forms/ChaincodeForm';
import ChaincodeModal from '../View/ChaincodeModal';
import { chaincodeListType } from '../types';

const styles = theme => {
  return {
    hash: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 60,
      letterSpacing: '2px'
    }
  };
};

export class Chaincodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      sourceDialog: false,
      chaincode: {}
    };
  }

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  sourceDialogOpen = chaincode => {
    this.setState({ chaincode });
    this.setState({ sourceDialog: true });
  };

  sourceDialogClose = () => {
    this.setState({ sourceDialog: false });
  };

  reactTableSetup = (classes, locale) => [
    {
      Header: format({ id: ['chain', 'codename'], locale }),
      accessor: 'chaincodename',
      Cell: row => (
        <a
          className={classes.hash}
          onClick={() => this.sourceDialogOpen(row.original)}
          href="#/chaincodes"
        >
          {row.value}
        </a>
      ),
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['chaincodename'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: format({ id: ['chain', 'channel'], locale }),
      accessor: 'channelName',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['channelName'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: format({ id: ['chain', 'path'], locale }),
      accessor: 'path',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['path'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: format({ id: ['chain', 'txCount'], locale }),
      accessor: 'txCount',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['txCount'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: format({ id: ['chain', 'version'], locale }),
      accessor: 'version',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['version'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    }
  ];

  render() {
    const { chaincodeList, classes, locale } = this.props;
    const { dialogOpen, sourceDialog, chaincode } = this.state;
    return (
      <div>
        {/* <Button className="button" onClick={() => this.handleDialogOpen()}>
          Add Chaincode
          </Button> */}
        <ReactTable
          data={chaincodeList}
          columns={this.reactTableSetup(classes, locale)}
          defaultPageSize={5}
          filterable
          minRows={0}
          showPagination={!(chaincodeList.length < 5)}
        />
        <Dialog
          open={dialogOpen}
          onClose={this.handleDialogClose}
          fullWidth
          maxWidth="md"
        >
          <ChaincodeForm />
        </Dialog>
        <Dialog
          open={sourceDialog}
          onClose={this.sourceDialogClose}
          fullWidth
          maxWidth="md"
        >
          <ChaincodeModal
            chaincode={chaincode}
            classes={classes}
            onClose={this.sourceDialogClose}
          />
        </Dialog>
      </div>
    );
  }
}

Chaincodes.propTypes = {
  chaincodeList: chaincodeListType.isRequired
};

export default withStyles(styles)(Chaincodes);
