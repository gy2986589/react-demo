//1、引入方式一：
// import TodoHeader from "./TodoHeader/TodoHeader";
// import TodoInput from "./TodoInput/TodoInput"
// import TodoList from "./TodoList/TodoList"
// export {
//     TodoHeader,
//     TodoInput,
//     TodoInput
// }



//2、引入方式二：
export {default as TodoHeader} from "./TodoHeader/TodoHeader";
export {default as TodoInput} from "./TodoInput/TodoInput";
export {default as TodoList} from "./TodoList/TodoList";
export {default as Like} from "./Like/Like";
export {default as LifeTest} from "./LifeTest/LifeTest";
export {default as HooksTest} from "./HooksTest/HooksTest";
export {default as Dad} from "./ContxtTest/Dad";
