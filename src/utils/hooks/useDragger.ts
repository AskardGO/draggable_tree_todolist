import React, { useEffect, useRef } from "react";
import {cleanup} from "@testing-library/react";

type InitialPositionType = {
    x: number,
    y: number
}

type OnSetCenterType = (cb : () => void) => void

function useDragger( id: string, onSetCenter?: OnSetCenterType, initialPosition?: InitialPositionType ): void {

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: initialPosition?.x || 0,
        startY: initialPosition?.y || 0,
        lastX: 0,
        lastY: 0
    })

    const limits = {
        minX: 10, maxX: window.innerWidth - 10,
        minY: 10, maxY: window.innerHeight - 10
    }

    const centered = () => {

        const target = document.getElementById(id);

        if (!target) throw new Error("No element");

        const centeredX = window.innerWidth / 2
        const centeredY = window.innerHeight / 4

        target.style.top = `${centeredY}px`;
        target.style.left = `${centeredX}px`;
        coords.current.startX = centeredX;
        coords.current.startY = centeredY;
        coords.current.lastX = centeredX;
        coords.current.lastY = centeredY;

        cleanup()

    }

    onSetCenter && onSetCenter(centered)

    useEffect(() => {
        centered();
    }, [])

    useEffect(() => {

        const target = document.getElementById(id);
        if (!target) throw new Error("No element");

        const container = target.parentElement;
        if (!container) throw new Error("target element must have a parent");

        const onMouseDown = (e: MouseEvent) => {

            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;

        }

        const onMouseUp = (e: MouseEvent) => {

            isClicked.current = false;
            coords.current.lastX = target.offsetLeft;
            coords.current.lastY = target.offsetTop;

        }

        const onMouseMove = (e: MouseEvent) => {

            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            target.style.top = `${nextY}px`;
            target.style.left = `${nextX}px`;

        }

        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);

        const cleanup = () => {

            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);

        }

        return cleanup;

    }, [id])

}

export default useDragger;