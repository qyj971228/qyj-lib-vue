declare const PREFIX = "qyj-dropdown";
declare const POSITION: readonly ["bottom", "top", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"];
declare type Position = (typeof POSITION)[number];
declare type DropdownProps = Partial<{
    position: Position;
}>;
export type { DropdownProps, Position };
export { PREFIX };
