import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./FullInput";
import {Button} from "./site/Button";
import {Input} from "./site/Input";

function App() {

    const [message, setMessage] = useState([
        {message: 'Message 1'},
        {message: 'Message 2'},
        {message: 'Message 3'},
        {message: 'Message 4'},
        {message: 'Message 5'},

    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'app'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'x'} callBack={callBackButtonHandler}/>
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