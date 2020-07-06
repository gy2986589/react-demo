import React, { Component } from 'react';
import TodoItem from './TodoItem'
import {getdata} from '../../servers' //引入请求接口



class TodoList extends Component {
    style = {
        border: "2px solid #000",
        margin: "20px 20px",
        width: "80%"
    }
    data=[
        {
            id: 0,
            name: 'zhao',
            age: 18
        },
        {
            id: 1,
            name: 'wang',
            age: 19
        },
        {
            id: 2,
            name: 'sun',
            age: 20
        },

    ]
    componentDidMount(){
        //请求数据
        getdata().then(res=>{
            // console.log(res);
        }).catch(err=>{
            // console.log(err)
        })
    }

    render() {
        return (
            <div style={{ width: this.style.width, border: this.style.border, margin: this.style.margin }}>
                <h3>我是List文件</h3>
                <ul>
                    <TodoItem data={[...this.data]} />
                </ul>
            </div>
        );
    }
}

export default TodoList;