import React, { Component } from 'react';
import styles from './index.module.css'

export default class Demo extends Component {
    render() {
        console.log(styles)
        return (
            <div className={styles.hello}>
                <h1 className={styles.title}>Demo</h1>
                <p className={styles.text}>我是demo组件</p>
            </div>
        )
    }
}
