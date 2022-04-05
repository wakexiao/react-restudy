import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to="/home/message" className="list-group-item">Message</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/news" className="list-group-item">News</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home/message" component={Message} />
                    <Route path="/home/news" component={News} />
                    <Redirect to="/home/message" />
                </Switch>
            </div>
        )
    }
}
