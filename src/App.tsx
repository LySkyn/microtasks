import React from 'react';
import './App.css';
import {Button} from "./site/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            {/*<button>MyYoutubeChannel-1</button>*/}
            {/*<button>MyYoutubeChannel-2</button>*/}
            <Button name={'MyYoutubeChannel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'Minsk')}/>
            <Button name={'MyYoutubeChannel-2'} callBack={() => Button2Foo('Im Ivan', 22)}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>

        </div>
    );
}

export default App;