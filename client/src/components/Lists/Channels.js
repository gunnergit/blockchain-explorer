/**
 *    SPDX-License-Identifier: Apache-2.0
 */
import format from '../../intlFormat';
import React, { Component } from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { channelsType } from '../types';

class Channels extends Component {
  reactTableSetup = locale => [
    {
      Header: 'ID',
      accessor: 'id',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['id'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true,
      width: 100
    },
    {
      Header: format({ id: ['channel', 'name'], locale }),
      accessor: 'channelname',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['channelname'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: format({ id: ['channel', 'blocks'], locale }),
      accessor: 'blocks',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['blocks'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true,
      width: 125
    },
    {
      Header: format({ id: ['channel', 'transactions'], locale }),
      accessor: 'transactions',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['transactions'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true,
      width: 125
    },
    {
      Header: format({ id: ['channel', 'time'], locale }),
      accessor: 'createdat',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['createdat'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    }
  ];

  render() {
    const { channels, locale } = this.props;
    return (
      <div>
        <ReactTable
          data={channels}
          columns={this.reactTableSetup(locale)}
          defaultPageSize={5}
          filterable
          minRows={0}
          showPagination={!(channels.length < 5)}
        />
      </div>
    );
  }
}

Channels.propTypes = {
  channels: channelsType.isRequired
};

export default Channels;
