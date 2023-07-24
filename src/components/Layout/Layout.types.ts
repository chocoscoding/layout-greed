export type LayoutSizesType = 'small' | 'medium' | 'large';

export interface LayoutProps {
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
   * How large should the Layout be?
   */
  size?: LayoutSizesType;
  /**
   * Layout contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
