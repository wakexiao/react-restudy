import React, { Component } from "react";
// NavLink 默认会给 active 当前跳转的路由加上active类，也可以通过 activeClassName 来设置 active 的类名
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Todos from "./components/Todos";
import Students from "./components/Students";
import Home from "./components/Home";
import Header from "./components/Header";
import Click from "./components/Clock";

export default class App extends Component {
  render() {
    return (
      <div>
        <Click />
        <Header />
        {/* <Todos />
        <Students /> */}
        {/* <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className="list-group-item" to="todos">todos</Link>
              <Link className="list-group-item" to="students">students</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/todos" className="list-group-item" component={Todos} />
                  <Route path="/students" className="list-group-item" component={Students} />
                  <Redirect to="/todos" />
                </Switch>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* NavLink的active class名应该是以路由和to的路径匹配成不成功，如果不加/跳转到二级路由的时候这里的active就会有问题 */}
              <NavLink activeClassName="active-test" className="list-group-item" to="/todos">todos</NavLink>
              <NavLink activeClassName="active-test" className="list-group-item" to="/students">students</NavLink>
              <NavLink activeClassName="active-test" className="list-group-item" to="/home">home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route exact path="/todos" className="list-group-item" component={Todos} />
                  <Route exact path="/students" className="list-group-item" component={Students} />
                  <Route path="/home" className="list-group-item" component={Home} />
                  {/* 一般写在所有路由的最下方，当所有路由都没匹配上的话就跳转到 Redirect 指定的路由 */}
                  <Redirect to="/todos" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
