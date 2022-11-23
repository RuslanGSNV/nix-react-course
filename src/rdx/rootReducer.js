import { combineReducers } from 'redux';
import { reducer as itemsReducer } from './items/reducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
})