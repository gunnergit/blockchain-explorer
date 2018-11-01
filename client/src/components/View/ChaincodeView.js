/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Chaincodes from '../Lists/Chaincodes';
import { chaincodeListType } from '../types';

export const ChaincodeView = ({ chaincodeList, locale }) => (
  <View>
    <Chaincodes chaincodeList={chaincodeList} locale={locale} />
  </View>
);

ChaincodeView.propTypes = {
  chaincodeList: chaincodeListType.isRequired
};

export default ChaincodeView;
