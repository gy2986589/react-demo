import React, {Component} from 'react';


const HoCtwo = (Test) =>{
    return class HoCtwo extends Component {
        render() {
            return (
                <div>
                    高阶组件内容
                    <Test/>
                </div>
            );
        }
    }

}


export default HoCtwo;