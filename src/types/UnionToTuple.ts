export type UnionToTuple<T, Result extends unknown[] = [], Last = GetUnionLast<T>> = [T] extends [never] ? Result : UnionToTuple<Exclude<T, Last>, Prepend<Result, Last>>

type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer R ? R : never
type UnionToIntersectionFn<T> = (T extends T ? (x: () => T) => unknown : never) extends (x: infer R) => unknown ? R : never

type Prepend<Arr extends unknown[], Item> = [Item, ...Arr]
