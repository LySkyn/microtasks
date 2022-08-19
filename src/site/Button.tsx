import React from 'react';

type buttonName = {
    name: string
    callBack: () => void
}


export const Button = (props: buttonName) => {

    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};