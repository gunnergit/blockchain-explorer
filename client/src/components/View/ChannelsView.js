/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Channels from '../Lists/Channels';
import { channelsType } from '../types';

export const ChannelsView = ({ channels, locale }) => (
  <View>
    <Channels channels={channels} locale={locale} />
  </View>
);

ChannelsView.propTypes = {
  channels: channelsType.isRequired
};

export default ChannelsView;
