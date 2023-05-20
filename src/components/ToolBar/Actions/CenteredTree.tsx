import React from 'react';
import {Button} from "../../CustomComponents/Button";
import {CursorIcon} from "../../Icons/IconList/Cursor";

type Props = {

};

export const CenteredTree = (props: Props) => {
    return (
        <Button variant='ghost'>
            <CursorIcon/>
        </Button>
    );
};