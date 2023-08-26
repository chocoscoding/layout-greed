import { ChangeEvent } from 'react';

export type LayoutTypesType = 'grid' | 'columns' | 'rows';

export type rowstype = 'Top' | 'Bottom' | 'Center' | 'Stretch';
export type ColumnType = 'Left' | 'Right' | 'Center' | 'Stretch';

export type SecondarySettingsChange = (
  e: ChangeEvent<HTMLInputElement>
) => void;

export type MainSettingsChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;
export interface MainSettingsType {
  size: number;
  gutter: number;
}
export interface SecondarySettings {
  count: number;
  offset: number;
  height: number;
  rowstype: rowstype;
  columnstype: ColumnType;
}
export interface LayoutProps {
  color?: string;
  customKeyBinding?: string;
}
