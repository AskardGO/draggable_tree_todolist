import React from 'react';
import { ReactComponent as Cursor } from './cursor.svg'

export const CursorIcon = ({size}: {color?:string, size?:number}) => {

    const [color, setColor] = React.useState<string | undefined>(undefined)
    const spanRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
        if(spanRef.current) {
            console.log(spanRef.current.style.color)
            setColor(spanRef.current.style.color)
        }
    }, [spanRef])

    return (
        <span ref={spanRef}>
            <Cursor
                style={{fill: 'white'}}
                width={size??'1rem'}
                height={size??'1rem'}
                stroke={color}
                fill={color}
            />
        </span>
    );
};