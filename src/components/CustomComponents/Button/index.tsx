import React from 'react';
import styles from './Button.module.css'

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'submit' | 'ghost'
    className?: string
}

export const Button = (props: IButtonProps) => {

    const {variant, className} = props

    return (
        <button {...props} className={`${styles.container} ${styles[variant || 'default']} ${className ? className : ''}`} />
    );
};