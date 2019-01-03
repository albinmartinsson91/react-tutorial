'use strict';

import {combineReducers} from 'redux';

//Import each reducer function
import counter from './counter';

//Combine all reducer functions
const rootReducer = combineReducers({
  counter
});

export default rootReducer;