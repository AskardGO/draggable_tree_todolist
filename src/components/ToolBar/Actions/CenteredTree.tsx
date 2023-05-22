import React from 'react';
import {Button} from "../../CustomComponents/Button";
import {CursorIcon} from "../../Icons/IconList/Cursor";

type Props = {
    onClick: () => void
};

export const CenteredTree = ({onClick}: Props) => {
    return (
        <Button variant='ghost' onClick={onClick}>
            <CursorIcon/>
        </Button>
    );
};