import React, {Component,createRef} from 'react';

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
        };
        this.inputDom = createRef();
        this.btnDom = createRef();
    }

    inputChange = (e) => {
        console.log(e.currentTarget.value);
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    submit=()=>{
        console.log(this.btnDom,this.btnDom.current.innerHTML);

    }

    //传参方式
    resetValue = (num) => {
        console.log(num)
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
                    ref = {this.inputDom}
                />
                <button onClick={this.submit} ref={this.btnDom}>提交</button>
                {/*第一种传参方式：*/}
                <button onClick={()=>this.resetValue(123345)}>重置</button>
                {/*第二种传参方式*/}
                {/*<button onClick={this.resetValue.bind(this,123456)}>重置</button>*/}

            </div>
        );
    }
}

export default TodoInput;