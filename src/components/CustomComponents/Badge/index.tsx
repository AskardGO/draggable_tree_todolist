import React from 'react';

//styles
import styles from './Badge.module.css'

type Props = {
    type: 'block' | 'absolute',
    color?: string,
    children: React.ReactNode | React.ReactNode[]
};

export const Badge = ({type, color, children}: Props) => {

    return (
        <div
            className={styles.container}
            style={{backgroundColor: color, position: type === 'block' ? 'relative' : 'absolute'}}
        >
            {children}
        </div>
    );
};