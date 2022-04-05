import React, { Component } from 'react';
import axios from 'axios';

export default class Students extends Component {
    state = {students: []}
    getStudentsList = async() => {
        axios.get('http://localhost:3000/students').then((res)=> {
            console.log('axios', res)
            this.setState({
                students: res.data
            })
        }, (err) => {
            console.log('axios', err)
        })
        fetch('http://localhost:3000/students').then(res => {
            console.log('fetch then', res)
            return res.json()
        }).then(res => {
            console.log('fetch then1', res)
        }).catch(err => { // 只写一个catch就好了，上面那个then可以省略catch错误，如果第一个.then就出错了也会直接走这个catch方法
            console.log('fetch catch 请求出错', err)
        })
        // await 一般配合 try catch使用
        try {
            const res = await fetch('http://localhost:3000/students');
            console.log('await res', res)
            const result = res.json();// fetch 返回的结果执行 json 方法的结果是一个promise对象
            console.log('await result', result)
            const result1 = await res.json();
            console.log('await result', result1)
        } catch(err) {
            console.log('try catch',err)
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentsList}>点击获取学生数据</button>
                <ul>
                    {
                        this.state.students.map((item, index) => (
                            <li key={index}>姓名：{item.name}; 年龄：{item.age}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
