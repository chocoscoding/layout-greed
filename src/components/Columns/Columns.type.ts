export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export interface ColumnsProps {
  //amount of columns
  count?: number;
  //width of each columns
  width?: number;
  //space between columns
  gutter?: number;
  //color
  color?: string;
  //offset from the edge
  offset?: number;
  //type of columns
  columnsType: 'stretch' | 'left' | 'right' | 'center';
}
