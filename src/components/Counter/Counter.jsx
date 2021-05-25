import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions';
import './Counter.scss';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <h2 className="count">The count is {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps, { increment, decrement, reset })(Counter);
