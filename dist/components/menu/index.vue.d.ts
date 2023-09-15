export declare type Node = {
    name: string;
    children?: Node[];
    level?: number;
    childNodeCount?: number;
    collapse?: boolean;
};
export declare type MenuProps = {
    data: Node[];
    onSelect: Function;
};
declare const _default: any;
export default _default;
