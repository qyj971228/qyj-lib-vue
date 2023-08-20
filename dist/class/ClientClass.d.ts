import type { Ref } from 'vue';
declare class Client {
    clientWidth: number;
    clientHeight: number;
    constructor(domRef: Ref<Element | null>);
}
export default Client;
