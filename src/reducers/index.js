import { combineReducers } from 'redux';
import types from '../actions/types';

const testReducer = () => 'This is just a test!';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
}

export default combineReducers({
  test: testReducer,
  count: countReducer
});