import React, { Component } from 'react';
import TodoItem from './TodoItem'


class TodoList extends Component {
    style = {
        border: "2px solid #000",
        margin: "20px 20px",
        width: "80%"
    }

    render() {
        return (
            <div style={{ width: this.style.width, border: this.style.border, margin: this.style.margin }}>
                <h3>我是List文件</h3>
                <ul>
                    <TodoItem>
                        我是item里面的内容
                    </TodoItem>
                </ul>
            </div>
        );
    }
}

export default TodoList;