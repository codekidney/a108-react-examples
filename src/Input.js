import React from 'react';

const Input = (props) => {
    return (
        <input type="text" onChange={ props.callbackSetTitle } placeholder="Wpisz tekst"/>
    )   
}
export default Input;