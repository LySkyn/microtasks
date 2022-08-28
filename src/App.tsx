import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./FullInput";

function App() {

    const [message, setMessage] = useState([
        {message: 'Message 1'},
        {message: 'Message 2'},
        {message: 'Message 3'},
        {message: 'Message 4'},
        {message: 'Message 5'},

    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage,...message])

    }
    return (
        <div className={'app'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    );
}
;

export default App;