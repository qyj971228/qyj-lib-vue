import type { ToRefs } from 'vue';
declare class Component<T> {
    constructor(prefix: string, props: ToRefs<T>, booleanProp: string[]);
    readonly _ = "-";
    readonly prefix: string;
    readonly suffixs: string[];
    readonly classList: string[];
    readonly props: ToRefs<T>;
    composeClass(classList: string[]): string;
    addClass(className?: string): void;
    removeClass(className?: string): void;
    replaceClass(replace: string, replacedBy: string): void;
    setStrProps<T>(): void;
    setBoolProps<T>(booleanProps: string[]): void;
    private computeClassList;
    getClassName(className?: string): string;
    getClassList(className?: string): string[];
}
export default Component;
