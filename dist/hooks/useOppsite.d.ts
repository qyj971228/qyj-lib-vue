import { type Ref } from 'vue';
export declare function useOppsite<T>(arr: [T, T], init?: T): [Ref<T>, Function, Function, Function];
