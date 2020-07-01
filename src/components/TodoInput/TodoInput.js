import React, { Component } from 'react';

class TodoInput extends Component {
    style = {
        border: "2px solid #000",
        margin: "20px 20px",
        width: "80%"
    }
    render() {
        return (
            <div style={{ width: this.style.width, border: this.style.border, margin: this.style.margin }}>
                <h3>我是input文件</h3>
                <input type="text" placeholder="请输入" />
                <br/>
                {this.props.btnTxt}
                <br/>
                {this.props.children}
            </div>
        );
    }
}

export default TodoInput;