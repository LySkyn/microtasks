import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

type FilterType= 'all'|'dollar'|'ruble'
function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
const [filter, setFilter]= useState<FilterType>('all')

    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArray.banknots} </span>
                            <span>{objFromMoneyArray.value} </span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>

    );
}
;

export default App;