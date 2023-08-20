export declare type UnionToTuple<T, Result extends unknown[] = [], Last = GetUnionLast<T>> = [T] extends [never] ? Result : UnionToTuple<Exclude<T, Last>, Prepend<Result, Last>>;
declare type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer R ? R : never;
declare type UnionToIntersectionFn<T> = (T extends T ? (x: () => T) => unknown : never) extends (x: infer R) => unknown ? R : never;
declare type Prepend<Arr extends unknown[], Item> = [Item, ...Arr];
export {};
