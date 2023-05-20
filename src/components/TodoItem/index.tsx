import React from 'react';
import styles from './TodoItem.module.css'

type Props = {
    content: string | React.ReactNode,
    isButtonAvailable: boolean
};

export const TodoItem = ({content, isButtonAvailable}: Props) => {
    return (
        <div className={styles.container}>
            Item
        </div>
    );
};