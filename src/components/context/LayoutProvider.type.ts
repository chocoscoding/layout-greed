import { Dispatch, ReactNode, SetStateAction } from 'react';

import { ColumnsProps } from '../Columns/Columns.type';
import { GridProps } from '../Grid/Grid.types';
import { RowsProps } from '../Rows/Rows.type';
//to set state of...
type StateSetter<T> = Dispatch<SetStateAction<T>>;
//one layout type
type LayoutType = 'Grid' | 'Row' | 'Column';

//layout context type mini type
interface miniLayoutType
  extends Partial<RowsProps>,
    Partial<GridProps>,
    Partial<ColumnsProps> {
  LayoutType?: LayoutType;
}

//main layout context type with state setter
export interface LayoutContextType extends miniLayoutType {
  LayoutType: LayoutType;
  setLayoutType: StateSetter<LayoutType>;
  setSize: StateSetter<LayoutContextType['size']>;
  setColor: StateSetter<LayoutContextType['color']>;
  setGutter: StateSetter<LayoutContextType['gutter']>;
  setOffset: StateSetter<LayoutContextType['offset']>;
  setWidth: StateSetter<LayoutContextType['width']>;
  setColumnsType: StateSetter<LayoutContextType['columnsType']>;
  setRowsType: StateSetter<LayoutContextType['rowsType']>;
}
export interface LayoutContextProviderType {
  children: ReactNode;
  testValue?: miniLayoutType;
}
