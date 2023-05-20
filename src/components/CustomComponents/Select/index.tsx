import React from 'react';

//styles
import styles from './Select.module.css'

//types
import {SelectOptionType} from "../../ToolBar/Actions/Scale";
import {Button} from "../Button";
type Props = {
    selectedIndex: number
    items: SelectOptionType[]
    onChange: (value: string) => void
};

export const Select = ({items, onChange}: Props) => {

    const options = items.map((el) => {
        return <option value={el.value}> <Button> {el.name} </Button> </option>
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { target } = event
        onChange(target.value)
    }

    return (
        <select className={styles.container} onChange={onChangeHandler}>
            { options }
        </select>
    );
};