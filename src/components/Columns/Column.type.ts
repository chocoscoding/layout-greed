export interface ColumnProps {
  //amount of columns
  count?: number;
  //width of each column
  width?: number;
  //space between columns
  gutter?: number;
  //color
  color?: string;
  //offset from the edge
  offset?: number;
  //type of column
  columnType: 'stretch' | 'left' | 'right' | 'center';
}
