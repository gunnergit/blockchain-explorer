/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import types from './types';

/* Reducers for Dashboard Charts */
const themeReducer = (state = { mode: 'light' }, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        locale: action.locale
      };

    case types.CHANGE_THEME: {
      return {
        ...state,
        mode: action.payload.mode
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
