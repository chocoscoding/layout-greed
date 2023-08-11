export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export interface RowsProps {
  //amount of rows
  count?: number;
  //width of each rows
  width?: number;
  //space between rows
  gutter?: number;
  //color
  color?: string;
  //offset from the edge
  offset?: number;
  //type of rows
  rowstype: 'stretch' | 'left' | 'right' | 'center';
}
