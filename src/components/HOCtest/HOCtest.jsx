import React, {Component} from 'react';
import HOCtwo from './HOCtwo'

class HOCtest extends Component {

    render() {
        return (
            <div style={{ margin: '20px', width: '80%', border: '2px solid #000' }}>
                HOC <br/>
            </div>
        )
    }
}
export default HOCtwo(HOCtest);


