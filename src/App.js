import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import DemoUseContext from './components/DemoUseContext';
import DemoUseReducer from './components/DemoUseReducer';
import DemoUseMemo from './components/DemoUseMemo';
import DemoUseCallback from './components/DemoUseCallback';

export default function App() {
  const [count, setCount] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const btnDom = useRef(null);
  const scrollDom = useRef(null);
  const handleAddClick = () => {
    console.log('加一：', count);
    setCount(count + 1);
    console.log('count:', count);
  };
  const handleCutClick = () => {
    console.log('减一：', count);
    setCount(count - 1);
  };
  console.log('scrollTop:', scrollTop);
  useEffect(() => {
    scrollDom.current.addEventListener('scroll', () => {
      setScrollTop(scrollDom.current.scrollTop);
    });
    btnDom.current?.addEventListener('click', handleCutClick, false);
    return () => {
      btnDom.current?.removeEventListener('click', handleCutClick);
    };
  }, [count]);
  return (
    <>
      <div>{count}</div>
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
      <DemoUseContext />
      <hr />
      <DemoUseReducer count={6} />
      <hr />
      <DemoUseMemo />
      <hr />
      <DemoUseCallback />
    </>
  );
}
