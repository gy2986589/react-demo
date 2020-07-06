import React, { Component } from 'react';

class LifeTest extends Component {
    constructor() {
        super();
        this.state={}

    }
    static getDrivedStateFormProps(){
        return {}
    }

    // componentWillMount() {
    //     console.log('componentWillMount')
    // }

    componentDidMount() {
    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    haha = () => {
        // console.log('我是按钮')
    }

    render() {
        // console.log('render')
        return (
            <div style={{ border: "2px solid #000", width: "80%", margin: "20px" }}>
                <h3>LifeTest组件</h3>
                <button onClick={this.haha}>点我</button>
            </div>
        );
    }
}


export default LifeTest;