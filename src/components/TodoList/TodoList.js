import React, { Component } from 'react';
import TodoItem from './TodoItem'


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