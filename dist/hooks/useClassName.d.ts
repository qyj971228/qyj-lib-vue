import type Component from '../class/ComponentClass';
import { type Ref } from 'vue';
export declare function useClassName<Props extends Object, Com extends Component<Props>>(props: Props, getClass: () => Com): [Ref<string>];
