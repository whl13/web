// 类组件的使用
// import React from "react"
// class app extends React.Component {
//     render() {
//         return <div>hello class</div>
//     }
// } 

import React from "react"
import Log from "./components/Log"

// 函数组件的使用
const app = () => <div><Log /></div>
/* JSX代码最终都会转换为以调用React.createElement()创建元素的代码
const item = <div>hello</div>
转化为const item = React.createElement('div', {}, 'hello')
    在JSX代码中：
    不要加引号
    有且只有一个根标签
    html标签小写开头，React组件大写开头
    可以使用{}插入JS表达式。（表达式：有返回值的语句。JSX也是表达式）
    属性正常写（class使用className，style必须用{}）
    标签必须正常闭合
    布尔类型、Null 以及 Undefined 将会忽略
*/

export default app