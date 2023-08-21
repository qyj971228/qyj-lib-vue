declare const PREFIX = "qyj-dropdown";
declare const POSITION: readonly ["bottom", "top", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"];
declare const CLOSE: readonly ["click", "hover"];
declare const OPEN: readonly ["click", "hover"];
declare type Position = (typeof POSITION)[number];
declare type Close = (typeof CLOSE)[number];
declare type Open = (typeof OPEN)[number];
declare type DropdownProps = Partial<{
    position: Position;
    close: Close;
    open: Open;
}>;
export type { DropdownProps, Position };
export { PREFIX };
