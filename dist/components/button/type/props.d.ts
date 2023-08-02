declare const PREFIX = "qyj-btn";
declare const KIND: readonly ["normal", "warn", "error"];
declare const SIZE: readonly ["s", "m", "l"];
declare const WEIGHT_EFFECT: readonly ["dashed", "ghost"];
declare const WEIGHT: readonly ["primary", "text", "link"];
declare const ROUND = "round";
declare const DASHED = "dashed";
declare const GHOST = "ghost";
declare const BOOLEAN_PROP: string[];
declare type Kind = (typeof KIND[number]) | undefined;
declare type Size = typeof SIZE[number];
declare type Weight = typeof WEIGHT[number];
declare type ButtonProps = Partial<{
    kind: Kind;
    size: Size;
    round: boolean;
    dashed: boolean;
    ghost: boolean;
    weight: Weight;
    disabled: boolean;
}>;
export { PREFIX, KIND, WEIGHT_EFFECT, ROUND, DASHED, GHOST, BOOLEAN_PROP, };
export type { Kind, Weight, ButtonProps };
