import type { Position } from '../components/dropdown/type/props';
import { type Ref } from 'vue';
export declare function useDropdownPosition(position: Ref<Position | undefined> | undefined, triggerRef: Ref<HTMLElement | null>, dropdownRef: Ref<HTMLElement | null>): (() => void)[];
