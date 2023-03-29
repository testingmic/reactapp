import React, { Component } from 'react';
import Hello from './Hello';

class Welcome extends Component {
    render() {
        return (
            <>
                <h1>My first class component</h1>
                <Hello />
            </>
        )
    }
}

export default Welcome;