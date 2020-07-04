import React, {Component} from 'react';

class TodoInput extends Component {
    style = {
        border: "2px solid #000",
        margin: "20px 20px",
        width: "80%"
    }

    constructor() {
        super();
        this.state = {
            inputValue: ""
        }
    }

    inputChange = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    resetValue = () => {
        this.setState({
            inputValue : ""
        })
    }

    render() {
        return (
            <div style={{width: this.style.width, border: this.style.border, margin: this.style.margin}}>
                <h3>我是input文件</h3>
                <br/>
                {this.props.btnTxt}
                <br/>
                {this.props.children}
                <br/>
                <input
                    type="text"
                    placeholder="请输入"
                    value={this.state.inputValue}
                    onChange={this.inputChange}
                />
                <button>提交</button>
                <button onClick={this.resetValue}>重置</button>

            </div>
        );
    }
}

export default TodoInput;