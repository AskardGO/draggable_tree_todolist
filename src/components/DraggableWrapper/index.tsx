import React from 'react';
import useDragger from "../../utils/hooks/useDragger";

interface DraggableProps {
    children: React.ReactNode | React.ReactNode[];
}

const Draggable = ({ children }: DraggableProps) => {

    useDragger('box')

    return (
        <div
            style={{ position: 'absolute' }}
            id={'box'}
        >
            {children}
        </div>
    );
};

export default Draggable;