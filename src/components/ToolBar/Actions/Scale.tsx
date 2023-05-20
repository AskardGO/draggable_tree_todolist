import React from 'react';

//components
import {Button} from "../../CustomComponents/Button";
import {Select} from "../../CustomComponents/Select";

//styles
import styles from './Scale.module.css'

type Props = {
    
};

export const Scale = (props: Props) => {
    return (
        <div className={styles.container}>
            <Button variant='ghost'>
                -
            </Button>
            <Select/>
            <Button variant='ghost'>
                +
            </Button>
        </div>
    );
};