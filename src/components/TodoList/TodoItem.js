// import React from 'react';
//
// const TodoItem = (props) => {
//     return (
//         <div>
//             <li>我是item</li>
//             <li>我是item</li>
//             <li>我是item</li>
//             <li>我是item</li>
//             <li>我是item</li>
//         </div>
//     );
// };
//
// export default TodoItem;
import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map(item=>{
                        return (
                            <li key={item.id}>{item.id}-{item.name}-{item.age}</li>
                        )
                    })
                }
            </div>
        );
    }
}

export default TodoItem;