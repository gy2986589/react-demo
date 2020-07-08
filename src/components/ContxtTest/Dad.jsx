import React, { Component, createContext } from 'react';
import Son from './Son'

 export const  { Provider, Consumer: countConsumer } = createContext();

class Dad extends Component {
    constructor() {
        super();
        this.state = {
            name: "hhhhhh"
        }
    }
    render() {
        return (
            <Provider value={{
                name: this.state.name
            }}>

                <div style={{ margin: '20px', width: '80%', border: '2px solid #000' }}>
                    Dad
                        <Son />
                </div>
            </Provider>

        );
    }
}

export default  Dad
