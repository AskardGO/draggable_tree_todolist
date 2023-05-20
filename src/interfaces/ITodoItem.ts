import {ReactNode} from "react";

export interface ITodoItem {
    name: string | ReactNode,
    id: string
    children?: ITodoItem[]
}

export interface ILine {
    id: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

export interface IItemCoords {
    x: number,
    y: number
}