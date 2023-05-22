import React from 'react';
import useDragger from "../../utils/hooks/useDragger";

interface DraggableProps {
    children: React.ReactNode | React.ReactNode[];
    onSetCenter: (cb: () => void) => void
}

const Draggable = ({ children, onSetCenter }: DraggableProps) => {

    useDragger('box', (cb) => onSetCenter(cb))

    return (
        <div
            style={{ position: 'absolute', transition: '.5s' }}
            id={'box'}
        >
            {children}
        </div>
    );
};

export default Draggable;