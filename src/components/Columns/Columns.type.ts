export interface ColumnsProps {
  //amount of columns
  count?: number;
  //height of each columns
  height?: number;
  //space between columns
  gutter?: number;
  //color
  color?: string;
  //offset from the edge
  offset?: number;
  //type of columns
  columnstype: 'stretch' | 'top' | 'bottom' | 'center';
}

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
