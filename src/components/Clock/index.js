import React, {useState, useEffect} from 'react'
import { unmountComponentAtNode } from 'react-dom'
import moment from 'moment'

export default function Click() {
    const [time, setTime] = useState(new Date().getTime())
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(time) // 这里的time永远是初始化时候传入的time
            setTime(new Date().getTime())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    function unMount() {
        unmountComponentAtNode(document.getElementById('root'))
    }
    console.log(time)
    return (
        <div>
            当前时间为：{moment(time).format('YYYY 年 MM 月 DD 日 hh:mm:ss')}
            <br />
            <button onClick={unMount}>点我销毁组件</button>
        </div>
    )
}
