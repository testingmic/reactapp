import React from "react";

const Hello = () => {
    return React.createElement(
        'div',
        {id: 'helloDiv', className: 'dummyClass'},
        React.createElement(
            'h4', null, 'Hello Obeng'
        )
    );
}

export default Hello;