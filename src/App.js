import React from 'react';
import './App.css';
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like,
    LifeTest
} from "./components/index";



function App() {
    const state = {
        headerData: "我是app传给Header的数据",
        footerData: "我是app传给Footer的数据"
    }
    return (
        <div className="App">
            <TodoHeader title={state.headerData}>
                我是head-child的内容
            </TodoHeader>
            <TodoInput btnTxt={state.footerData}>
                我是footer-child的内容
            </TodoInput>
            <TodoList/>
            <Like/>
            <LifeTest/>
        </div>
    );
}

export default App;
