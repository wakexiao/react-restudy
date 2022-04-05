import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        list: [
            {
                id: '01',
                title: 'message1'
            },
            {
                id: '02',
                title: 'message2'
            },
            {
                id: '03',
                title: 'message3'
            }
        ]
    }
    render() {
        const {list} = this.state;
        return (
            <div>
                {/* <div>传递params参数，可以在这个路由组件中的props.match拿到</div>
                <ul>
                    {
                        list.map(messageObj => {
                            return (
                                <li key={messageObj.id}>
                                    <Link to={`/home/message/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul> */}
                {/* <div>传递search参数，可以在这个路由组件中的props.location.search拿到,但是是字符串，需要自己切割，可以用react脚手架自带的querystring库去处理</div>
                <ul>
                    {
                        list.map(messageObj => {
                            return (
                                <li key={messageObj.id}>
                                    <Link to={`/home/message/detail?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul> */}
                <div>传递state参数，可以在这个路由组件中的props.location拿到</div>
                <ul>
                    {
                        list.map(messageObj => {
                            return (
                                <li key={messageObj.id}>
                                    <Link to={{
                                        pathname: '/home/message/detail',
                                        // 可以不用state这个字段名，用其他字段值也可以把参数传到路由组件过去，但是刷新页面会丢失，使用state字段刷新页面也不会丢失，
                                        // 但仅限使用 BrowserRouter，HashRouter刷新页面state的值也会丢失，BrowserRouter 是因为底层一直在操作history API,所以有历史记录，但是把浏览器记录删除，值也会丢失
                                        state: {
                                            id: messageObj.id,
                                            title: messageObj.title,
                                        }
                                    }}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* params传参需要特殊配置路由 :id 的形式 */}
                {/* <Route path="/home/message/:id/:title" component={Detail} /> */}
                {/* search 传参和state传参都是正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />

                {/* params和search传参，不管怎么刷新页面数据都不会丢失，但是state传参刷新页面会丢失，如果用 BrowserRouter 刷新页面数据不会丢失，但是清除浏览器历史记录还是会丢失 */}
            </div>
        )
    }
}
