import React, { useState, useMemo } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const getUserInfo = (type) => {
    console.log('getUserInfo >>>>', type)
    let age = 0;
    for(let i = 0; i < 100000000; i++){
      age ++
    }
    return {
      name: 'jack',
      age,
    };
  }
  const userInfo = getUserInfo('normal');
  const userInfoMemo = useMemo(() => {
    return getUserInfo('useMemo')
  }, [count]);

  return (
    <div>
      <div>count 的值为：{count}</div>
      <div>count1 的值为：{count1}</div>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <button onClick={() => setCount1(count1 + 1)}>count1 +</button>
      <Counts count={count} desc='no react.memo' />
      <Counts1 count={count} desc='react.memo' />
      <br />
      <br />
      <UserCard userInfo={userInfo} desc='no useMemo' />
      <UserCard userInfo={userInfoMemo} desc='useMemo' />
    </div>
  );
};

const Counts = (props)=> {
  const { count, desc } = props;
  console.log('render--------', desc)
  return (
    <div>
      你已经点了 count {count} 次了！！！
    </div>
  );
}

const Counts1 = React.memo((props)=> {
  const { count, desc } = props;
  console.log('render--------', desc)
  return (
    <div>
      你已经点了 count {count} 次了！！！
    </div>
  );
})

const UserCard = React.memo((props)=> {
  const { userInfo, desc } = props;
  console.log('render--------', desc)
  return (
    <div>
      my name is {userInfo.name}. <br />
      i am {userInfo.age} years lod.
    </div>
  );
})