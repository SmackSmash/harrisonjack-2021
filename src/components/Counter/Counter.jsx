import React from 'react';
import { connect } from 'react-redux';
// import { increment, decrement, reset } from '../../actions';
import './Counter.scss';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <h2 className="count">The count is {count}</h2>
    </div>
  );
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(Counter);
