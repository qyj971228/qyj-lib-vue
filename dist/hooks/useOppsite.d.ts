import { type Ref } from 'vue';
export declare function useOppsite<T>(init: T, arr: [T, T]): [Ref<T>, Function, Function, Function];
