import React, { useState } from 'react';

export default function DemoUseState(props) {
  const [a, setA] = useState(0);

  const handleAddClick = () => {
    // setA(a + 1);
    // setA(a + 1); // 如果直接传值去render的话，这里 set 两次也会只有一次的效果，为什么呢？
    // 因为在这个 function 里面两次 set 获取到 a 的值是上一次的值，所以相当于这两次 set 都set了相同的值

    // 同步 set 会合并在一个方法里去 set，并且会依次执行，但只 render 一次，先 set a + 1 再 set a + 1;
    setA((a) => a + 1);
    console.log('第一次加1后的a:', a);
    setA((a) => a + 1);
    console.log('第二次加1后的a:', a);
  };
  const handleAsyncSubClick = () => {
    // 异步 set 会立即依次执行 set，不会合并去更新，render 两次，每次 set a - 1
    Promise.resolve().then(() => {
      // setA(a - 1);
      // setA(a - 1); // 这里这样写虽然异步会 render 两次，但是和上面 + 是一样的，a 的值两次都是一样的
      setA((a) => a - 1);
      setA((a) => a - 1);
    });
  };
  console.log('render useState', a);
  return (
    <div>
      <div>a: {a}</div>
      <button onClick={handleAddClick}>同步加</button>
      <button onClick={handleAsyncSubClick}>异步减</button>
    </div>
  );
}
