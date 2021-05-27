import { combineReducers } from 'redux';
import { LIGHT, DARK } from '../actions/types';

const themeReducer = (state = LIGHT, action) => {
  switch (action.type){
    case DARK:
      return DARK;
    case LIGHT:
      return LIGHT;
    default:
      return state;
  }
}

export default combineReducers({
  theme: themeReducer
});