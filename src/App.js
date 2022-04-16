import React, { useState, useEffect, useRef } from 'react';
import DemoUseContext from './components/DemoUseContext';
import DemoUseReducer from './components/DemoUseReducer';
import DemoUseMemo from './components/DemoUseMemo';
import DemoUseCallback from './components/DemoUseCallback';
import { DemoUseState, DemoSetState } from './components/DemoState';

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const btnDom = useRef(null);
  const scrollDom = useRef(null);
  const handleAddClick = () => {
    // 同步执行会合并 setCount, 只 render 一次
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const handleCutClick = () => {
    // 异步减，会单个依次执行
    Promise.resolve().then(() => {
      setCount((count) => count - 1);
      setCount((count) => count - 1);
      // 这样写和上面写不一样，在当前函数里拿到的 count 是上一次 render 的值，如果传一个函数的话，接收到的就是最新的 count 值
      // setCount(count - 1);
      // setCount(count - 1);
    });
  };
  useEffect(() => {
    scrollDom.current.addEventListener('scroll', () => {
      setScrollTop(scrollDom.current.scrollTop);
    });
    btnDom.current?.addEventListener('click', handleCutClick, false);
    return () => {
      btnDom.current?.removeEventListener('click', handleCutClick);
    };
  }, [count]);
  console.log('render', count);
  return (
    <>
      <div>
        count: {count}; count1: {count1}
      </div>
      <button onClick={handleAddClick}>click + 1</button>
      <button ref={btnDom}>click - 1</button>
      <div
        ref={scrollDom}
        style={{
          height: '200px',
          width: '200px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div style={{ height: '2000px', width: '200px', background: 'red' }}>
          我是滚动区域
        </div>
      </div>
      <hr />
      useState
      <DemoUseState />
      <hr />
      setState
      <DemoSetState />
      {/* <DemoUseContext />
      <hr />
      <DemoUseReducer count={6} />
      <hr />
      <DemoUseMemo />
      <hr />
      <DemoUseCallback /> */}
    </>
  );
}
