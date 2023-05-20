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

    return (
        <>
            <Toolbar services={2} onScale={() => {}} setOnCenter={() => {}}/>
            <div className={styles.container}>
                <Draggable>
                    Hello world
                </Draggable>
            </div>
        </>
    );
};