import { initialState } from "./editor";
import "../scss/editor_body.scss";
import React from "react";
interface initialState2 {
    children?: React.ReactNode;
    index: number;
    id: string;
    tagName: string;
    html: string;
    updateblock: ({ id, html, tagName }: initialState) => void;
    onDragStart: (e: any, position: any) => void;
    onDragEnter: (e: any, position: any) => void;
    onDropEnd: (e: any) => void;
    isSelected: boolean;
}
export default function Editor_body(props: initialState2): React.JSX.Element;
export {};
