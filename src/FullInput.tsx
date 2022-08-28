import React, {ChangeEvent, useState} from 'react';
import {Button} from "./site/Button";
import {Input} from "./site/Input";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    // let [title, setTitle] = useState('')

    // const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //
    //     setTitle(event.currentTarget.value)
    // }

    // const onClickButtonHandler = () => {
    //     props.addMessage(title)
    //     setTitle('')

    return (
        <div>

        </div>
    )
}
