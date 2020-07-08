import React, { Component } from 'react';
import GrandSon from "./GrandSon"
// import {Consumer} from './Dad'
class Son extends Component {
    render() {
        return (
            // <Consumer>
            //     {
            //         (arg) => {
            //             console.log(arg)
            //             return (
            //                 <div>
            //                     Son
            //                     <GrandSon />
            //                 </div>

            //             )
            //         }
            //     }
            // </Consumer>
            <div>
                Son
                <GrandSon/>
            </div>

        );
    }
}

export default Son;