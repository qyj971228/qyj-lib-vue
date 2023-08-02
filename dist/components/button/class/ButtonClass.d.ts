import type { ToRefs } from 'vue';
import Component from '../../../class/ComponentClass';
import type { ButtonProps } from '../type/props';
declare class Button extends Component<ButtonProps> {
    constructor(props: ToRefs<ButtonProps>);
    private setButtonWeight;
}
export default Button;
