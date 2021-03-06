import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            isLike: false
        }
    }

    testFuc = () => {
        //react不可直接更改state值，需要this.setState({})修改
        this.setState({
                isLike: !this.state.isLike
            }
        )
    }

    render() {
        return (
            <div style={{border: "2px solid #000", width: "80%", margin: "20px"}}>
               <h3>我是Like组件：</h3>点数字试试
                <span onClick={this.testFuc}>
                    {
                        this.state.isLike ? '000' : '111'
                    }
                </span>
            </div>
        );
    }
}

export default Like;