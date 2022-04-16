import React, { createContext, useContext } from 'react';

const Context = createContext({ name: 'jack' });

export default () => {
  return (
    <div>
      praent
      <Context.Provider value={{ name: 'tony' }}>
        <Childen></Childen>
        <Childen1></Childen1>
      </Context.Provider>
      当没有使用 provider 包裹的时候才会使用到 createContext 传入的默认值
      <Childen></Childen>
      <Childen1></Childen1>
    </div>
  );
};

const Childen = () => {
  const info = useContext(Context);
  // console.log('info >>>>>>>>>>', info);
  return <div>my name is {info.name}</div>;
};

const Childen1 = () => {
  return (
    <Context.Consumer>
      {(info) => {
        // console.log('consumer info>>>>>>>', info);
        return <div>my name is {info.name}</div>;
      }}
    </Context.Consumer>
  );
};
