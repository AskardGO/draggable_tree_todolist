import React from 'react';

//components
import {Button} from "../../CustomComponents/Button";
import {Select} from "../../CustomComponents/Select";

//styles
import styles from './Scale.module.css'

//types
export type SelectOptionType = {
    value: string,
    name: string
}

type Props = {
    
};

export const Scale = (props: Props) => {

    const [scaleValueIndex, setScaleValueIndex] = React.useState(8)
    const values = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150]

    const generateScaleValues = (): SelectOptionType[] => {

        return values.map((value) => {
            return { value:`${value}`, name: `${value}%`}
        })

    }

    return (
        <div className={styles.container}>
            <Button variant='ghost' className={styles.button_minus}>
                -
            </Button>
            <Select items={generateScaleValues()} selectedIndex={scaleValueIndex} onChange={() => {}}/>
            <Button variant='ghost' className={styles.button_plus}>
                +
            </Button>
        </div>
    );
};