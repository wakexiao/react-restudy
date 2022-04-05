import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
    state = {
        detailList: [
            {
                id: '01',
                content: '今天又下大雨了'
            },
            {
                id: '02',
                content: '明天继续加班'
            },
            {
                id: '03',
                content: '淋雨一直走'
            }
        ]
    }
    render() {
        // const {match: {params: {id, title}}} = this.props;

        // const {location: {search}} = this.props;
        // const searchObj = qs.parse(search.slice(1));
        // const searchStr = qs.stringify(searchObj);
        // console.log(searchObj)
        // console.log(searchStr)

        const {location: {state = {}}} = this.props;
        const {id, title} = state;
        console.log(this.props)
        const detail = this.state.detailList.find(detailObj => detailObj.id === id) || {}
        return (
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>content: {detail.content}</li>
                </ul>
            </div>
        )
    }
}
