import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        inputVal: '',
        list: []
    };

    onChange = (e)=> {
        const {list} = this.state;
        const value = e.target.value;
        this.setState({
            inputVal: value
        })
        // const todo = {todo: value, done: false};
        // this.setState({
        //     list: [...list, todo]
        // })
    }
    addTodo = () => {
        const {list, inputVal} = this.state;
        const id = new Date().getTime() + list.length + '';
        const todo = {todo: inputVal, done: false, id};
        const isTodo = list.some(item => item.todo === inputVal);
        if(!inputVal) {
            alert('请输入待办事件');
            return
        }
        if(isTodo){
            alert('该待办事件已存在')
            return
        }
        this.setState({
            list: [...list, todo],
            inputVal: ''
        })
    }

    todoDone = (id) => {
        return (e) => {
            const isDone = e.target.checked;
            const {list} = this.state;
            const newList = list.map(item => {
                if(item.id === id) item.done = isDone;
                return item;
            });
            this.setState({
                list: newList
            });
        }
    }
    dleTodo = (id) => {
        return () => {
            const newList = this.state.list.filter(item => item.id !== id);
            this.setState({
                list: newList
            });
        }
    }
    dleDoneTodo = () => {
        const {list} = this.state;
        const newList = list.filter(item => !item.done);
        console.log(list, newList);
        this.setState({
            list: newList
        });
    }
    onKeyDonw = (e) =>{
        const value = e.keyCode;
        if(value === 13){
            this.addTodo()
        }
    }
    render() {
        const {inputVal, list} = this.state;
        const doneTodos = list.filter(item => item.done).length;
        return (
            <div>
                <input type="text" value={inputVal} onChange={this.onChange} onKeyDown={this.onKeyDonw}/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        list.map((item, index) => {
                            const {id} = item;
                            return (
                                <li key={id}>
                                    <label htmlFor={id}>
                                        <input type="checkbox" onChange={this.todoDone(id)} name={id} id={id} />
                                        <span>{item.todo}</span>
                                    </label>
                                    <button onClick={this.dleTodo(id)}>删除</button>
                                </li>
                            )
                        })
                    }
                    <div>已完成 {doneTodos} / 全部 {list.length}</div>
                    {!!doneTodos && <button onClick={this.dleDoneTodo}>清空已完成任务</button>}
                </ul>
            </div>
        )
    }
}
