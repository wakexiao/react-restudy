import React, { useReducer } from 'react';

const INCERMENT = 'increment';
const DECERMENT = 'decrement';
const RESET = 'reset';

// const initState = {
//   count: 0,
// };

function init (initCount) {
  console.log('useReducer init >>>>>>>>>')
  return {
    count: initCount
  }
}

function reducer(state, action) {
  switch (action.type) {
    case INCERMENT:
      return {
        count: state.count + 1,
      };
    case DECERMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return init(action.payload);
    default:
      return state;
  }
}

// reducer 函数
// initialArg state的初始值
// init 惰性地创建初始 state ，特别适合用于有重置需求的场景
// const [state, dispatch] = useReducer(reducer, initialArg, init);
export default ({count}) => {
  // 当不传入第三个 init 方法参数时，会直接把第二个参数当做 state
  // const [state, dispatch] = useReducer(reducer, {count});
  // 当传入第三个 init 方法参数是，初始化会调用 init 方法，并且把第二个参数传入到 init 方法中，并且将 init 方法的返回值当做 state
  const [state, dispatch] = useReducer(reducer, count, init);
  const handleIncermentClick = () => {
    dispatch({
      type: INCERMENT,
    });
  };
  const handleDecermentClick = () => {
    dispatch({
      type: DECERMENT,
    });
  };
  const handleResetClick = () => {
    dispatch({
      type: RESET,
      payload: count,
    })
  }
  return (
    <div>
      <div>useReducer 当前的count值：{state.count}</div>
      <button onClick={handleIncermentClick}>count + 1</button>
      <button onClick={handleDecermentClick}>count - 1</button>
      <button onClick={handleResetClick}>reset</button>
    </div>
  );
};
