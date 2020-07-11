import React, {Component} from 'react';
// import './App.css';
// import {
//     TodoHeader,
//     TodoInput,
//     TodoList,
//     Like,
//     LifeTest,
//     HooksTest,
//     Dad,
//     HOCtest
// } from "./components/index";

//路由配置
import {Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import {
    PageIndex,
    PageOne,
    PageTwo
} from "./pages/index";

class App extends Component {
    // const state = {
    //     headerData: "我是app传给Header的数据",
    //     footerData: "我是app传给Footer的数据"
    // }
    render() {
        return (
            <div className="App">
                App
                <li><Link to="/PageIndex">PageIndex</Link></li>
                <li><Link to='/PageOne'>PageOne</Link></li>
                <li><Link to='PageTwo'>PageTwo</Link></li>

                <Switch>
                    <Route component={PageIndex} path="/PageIndex"/>
                    <Route component={PageOne} path="/PageOne"/>
                    <Route component={PageTwo} path="/PageTwo"/>
                    <Redirect to='/PageIndex' from='/'/>
                </Switch>
                {/*<PageIndex/>*/}
                {/*<TodoHeader title={state.headerData}>*/}
                {/*    我是head-child的内容*/}
                {/*</TodoHeader>*/}
                {/*<TodoInput btnTxt={state.footerData}>*/}
                {/*    我是footer-child的内容*/}
                {/*</TodoInput>*/}
                {/*<TodoList/>*/}
                {/*<Like/>*/}
                {/*<LifeTest/>*/}
                {/*<HooksTest/>*/}
                {/*<Dad></Dad>*/}
                {/*<HOCtest/>*/}
            </div>
        );

    }

}

export default App;
