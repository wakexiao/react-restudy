import React, { Component } from 'react';

export default class DemoSetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
    };
  }
  handleAddClick = () => {
    // 同步：合并到一个方法里去调用，render 一次
    this.setState(
      (state, props) => ({ a: state.a + 1 }),
      () => { // 这里也可以使用普通函数，react 底层使用 bind 绑定了 this
        // 因为同步的原因，批量处理 setState，这里获取到第一次加 a 的值是 2
        console.log('第一次加之后', this.state.a); // 第一次加之后 2
      }
    );
    this.setState(
      (state, props) => ({ a: state.a + 1 }),
      () => {
        console.log('第二次加之后', this.state.a); // 第二次加之后 2
      }
    );
  };
  handleAsyncSubClick = () => {
    // 异步：render 两次，和 useState 一样
    Promise.resolve().then(() => {
      this.setState(
        (state, props) => ({ a: state.a - 1 }),
        () => {
          // 异步单独处理每一个 setState，这里获取到第一次减 a 的值是 1
          console.log('第一次减之后', this.state.a); // 第一次减之后 1 点击了加按钮之后再点击减按钮
        }
      );
      this.setState(
        (state, props) => ({ a: state.a - 1 }),
        () => {
          console.log('第二次减之后', this.state.a); // 第二次减之后 0
        }
      );
    });
  };
  render() {
    console.log('render setState', this.state.a);
    return (
      <div>
        <div>a: {this.state.a}</div>
        <button onClick={this.handleAddClick}>同步加</button>
        <button onClick={this.handleAsyncSubClick}>异步减</button>
      </div>
    );
  }
}
