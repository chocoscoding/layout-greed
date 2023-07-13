import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonSizesType = 'small' | 'medium' | 'large';
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * What color to use
     */
    color?: string;
    /**
     * How large should the button be?
     */
    size?: ButtonSizesType;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

declare const Button: ({ primary, size, backgroundColor, label, color, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, ButtonProps };
