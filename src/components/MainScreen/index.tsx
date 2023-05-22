import React, {useRef} from 'react';

//components
import Draggable from "../DraggableWrapper";

//styles
import styles from './MainScreen.module.css'
import {TreeButton} from "../CategoriesItem";

//types
import {ITodoItem} from "../../interfaces/ITodoItem";
import {Toolbar} from "../ToolBar";
import useDragger from "../../utils/hooks/useDragger";
type Props = {

};

export const MainScreen = (props: Props) => {

    let setCenterCb: (() => void) | null  = null;

    const onSetCenter = () => {
        setCenterCb && setCenterCb()
    }

    return (
        <>
            <Toolbar services={2} onScale={() => {}} onSetCenter={onSetCenter}/>
            <div className={styles.container}>
                <Draggable onSetCenter={(cb) => setCenterCb = cb}>
                    Hello world
                </Draggable>
            </div>
        </>
    );
};