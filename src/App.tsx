import React from 'react';
import './App.css';


function App() {
    // const myFirstSubscriber = () => {
    //     console.log('Hello, I\'m Vasya')
    // };
    // const mySecondSubscriber = () => {
    //     console.log('Hello, I\'m Ivan')
    // };
    // const onClickHandler=(name:string) => {
    //     console.log(name)
    // }
    const foo1 = () => {
        console.log('100200')
// ничего не передавать, но в консоли должно показаться 100200
    };
    const foo2 = (num:number) => {
        console.log(num)
    };
    return (
        <div className="App">
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{console.log('Hello!')}}> My Youtube Chanel - 1 </button>*/}
            {/*<button onClick={(event) => onClickHandler('Vasya')}> My Youtube Chanel - 1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Ivan')}> My Youtube Chanel - 2</button>*/}
            {/*<button onClick={() => onClickHandler('some info')}> My Youtube Chanel - 3</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    );
}

export default App;