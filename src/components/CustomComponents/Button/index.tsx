import React from 'react';
import styles from './Button.module.css'

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'submit' | 'ghost'
}

export const Button = (props: IButtonProps) => {

    const {variant} = props

    return (
        <button className={`${styles.container} ${styles[variant || 'default']}`} {...props}/>
    );
};