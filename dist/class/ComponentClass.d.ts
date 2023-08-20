declare class Component<T extends Object> {
    constructor(prefix: string, props: T, booleanProp?: string[]);
    readonly _ = "-";
    readonly prefix: string;
    readonly suffixs: string[];
    readonly classList: string[];
    readonly props: T;
    composeClass(classList: string[]): string;
    addClass(className?: string): void;
    removeClass(className?: string): void;
    replaceClass(replace: string, replacedBy: string): void;
    setStrProps(): void;
    setBoolProps(booleanProps?: string[]): void;
    private computeClassList;
    getClassName(className?: string): string;
    getClassList(className?: string): string[];
}
export default Component;
