import React, { Component } from 'react'


class TodoHeader extends Component {
    // style = {
    //     border: "2px solid #000",
    //     margin: "20px 20px",
    //     width: "80%"
    // }    
    //另一种管理数据方法 只有extends Component 式组件有 函数式没有
    constructor(){
        super();
        this.style = {
            border: "2px solid #000",
            margin: "20px 20px",
            width: "80%"
        }    
    }
    render() {
        return (
            <div style={{ width: this.style.width, border: this.style.border, margin: this.style.margin }}>
                <h3>我是header文件</h3>
                {this.props.title}
                <br/>
                {this.props.children}
            </div>
        )
    }
}


export default TodoHeader