import { FC, createContext, useState } from 'react';

import {
  LayoutContextProviderType,
  LayoutContextType,
} from './LayoutProvider.type';

const LayoutContext = createContext<LayoutContextType>({
  LayoutType: 'Grid',
  setLayoutType: () => {},
  size: 20,
  setSize: () => {},
  color: '#fff',
  setColor: () => {},
  gutter: 20,
  setGutter: () => {},
  offset: 20,
  setOffset: () => {},
  width: 20,
  setWidth: () => {},
  columnsType: 'stretch',
  setColumnsType: () => {},
  rowsType: 'stretch',
  setRowsType: () => {},
});

export const LayoutProvider: FC<LayoutContextProviderType> = ({
  children,
  testValue,
}) => {
  const [layoutType, setLayoutType] =
    useState<LayoutContextType['LayoutType']>('Grid');

  const [size, setSize] = useState<LayoutContextType['size']>(20);

  const [color, setColor] = useState<LayoutContextType['color']>(
    'rgba(250, 15, 15, 0.2)'
  );

  const [gutter, setGutter] = useState<LayoutContextType['gutter']>(20);

  const [offset, setOffset] = useState<LayoutContextType['offset']>(20);

  const [width, setWidth] = useState<LayoutContextType['width']>(20);

  const [columnsType, setColumnsType] =
    useState<LayoutContextType['columnsType']>('stretch');

  const [rowsType, setRowsType] =
    useState<LayoutContextType['rowsType']>('stretch');

  const contextValue: LayoutContextType = {
    LayoutType: layoutType,
    setLayoutType,
    size,
    setSize,
    color,
    setColor,
    gutter,
    setGutter,
    offset,
    setOffset,
    width,
    setWidth,
    columnsType,
    setColumnsType,
    rowsType,
    setRowsType,
  };
  const finalContextValue: LayoutContextType = {
    ...contextValue,
    ...testValue,
  };
  return (
    <LayoutContext.Provider value={finalContextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
