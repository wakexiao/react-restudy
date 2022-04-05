import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    go = () => {
        // console.log(this.props)
        this.props.history.goForward()
    }
    back = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="page-header">
                <h1>Hello React</h1>
                <button onClick={this.go}>前进</button>
                <button onClick={this.back}>后退</button>
            </div>
        )
    }
}

// 使用 withRouter 高阶组件处理后，可以是一般组件接收到路由组件的三个参数，history、location、match
export default withRouter(Header)