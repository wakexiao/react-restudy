import React, { useState, useCallback } from 'react';

export default function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const [showSortArr, setShowSortArr] = useState(false);
  const [arr, setArr] = useState([]);
  const getRandomArr = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      arr.push(randomNumber);
    }
    return arr;
  };
  const useCallbackGetRandomArr = useCallback(getRandomArr, [count]);
  const changeArr = () => {
    const arr = getRandomArr(count * 100);
    setArr(arr);
  };
  const sortArr = (arr) => {
    const newArr = [...arr];
    const length = newArr.length;
    console.log(newArr)
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        console.log(newArr[j], newArr[j + 1])
        if (newArr[j] > newArr[j + 1]) {
          // 相邻的两个数作比较，如果前一个数字比后一个数字大，两个数字交换位置，相当于就是大的数字往后移
          let temp = newArr[j + 1]; // 将小的数字的值取出来
          newArr[j + 1] = newArr[j]; // 因为小数字的值已经取出来了，所以可以先把大数字的值赋给小值的位置，也是相当于让大值往后移
          newArr[j] = temp; // 最后再将小值的位置赋值为之前大值的位置，让小值往前移
          // 利用es6 的解构赋值简写
          // [newArr[j], newArr[j + 1]] = [ newArr[j + 1], newArr[j]]

          // let arr = [1,2,3];
          // [arr[0],arr[1],arr[2]] = [3,2,1]
          // 相当于 arr[0] = 3; arr[1] = 2; arr[2] = 1;
        }
      }
    }
    return newArr;
  };
  const handleSortClick = () => {
    const newArr = sortArr(arr);
    console.log(newArr)
    setShowSortArr(true);
    setArr(newArr);
  };
  return (
    <div>
      <div>count 的值为 {count}</div>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <button onClick={changeArr}>生成随机数组</button>
      {showSortArr && <div>数组从大到小排序为：{arr.join(',')}</div>}
      <button onClick={handleSortClick}>数组排序</button>
      <Childen
        getRandomArr={getRandomArr}
        count={count}
        desc="no useCallback"
      />
      <Childen
        getRandomArr={useCallbackGetRandomArr}
        count={count}
        desc="useCallback"
      />
    </div>
  );
}

const Childen = React.memo((props) => {
  const { getRandomArr, count, desc } = props;
  console.log('render -----------', desc);
  const arr = getRandomArr(100 * count);
  return <div>当前数组为： {arr.join(', ')}</div>;
});
