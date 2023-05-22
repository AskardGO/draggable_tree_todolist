import React from 'react';

//styles
import styles from './Toolbar.module.css'
import {Button} from "../CustomComponents/Button";
import {ListView} from "./Actions/ListView";
import {CenteredTree} from "./Actions/CenteredTree";
import {Scale} from "./Actions/Scale";

type Props = {
    onScale: (value: number) => void
    services: number

    onSetCenter: () => void
};

export const Toolbar = ({services, onSetCenter}: Props) => {
    return (
        <div className={styles.container}>
            <div>
                Services {services}
            </div>
            <div className={styles.actions}>
                <ListView/>
                <CenteredTree onClick={onSetCenter}/>
                <Scale/>
            </div>
        </div>
    );
};