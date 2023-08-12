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
  count: 20,
  setCount: () => {},
  offset: 20,
  setOffset: () => {},
  width: 20,
  setWidth: () => {},
  height: 20,
  setHeight: () => {},
  columnstype: 'stretch',
  setcolumnstype: () => {},
  rowstype: 'stretch',
  setrowstype: () => {},
});

export const LayoutProvider: FC<LayoutContextProviderType> = ({
  children,
  testValue,
}) => {
  const [layoutType, setLayoutType] =
    useState<LayoutContextType['LayoutType']>('Grid');

  const [size, setSize] = useState<LayoutContextType['size']>(20);

  const [color, setColor] = useState<LayoutContextType['color']>(
    'rgba(250, 15, 15, 0.1)'
  );

  const [gutter, setGutter] = useState<LayoutContextType['gutter']>(20);
  const [count, setCount] = useState<LayoutContextType['count']>(12);

  const [offset, setOffset] = useState<LayoutContextType['offset']>(20);

  const [width, setWidth] = useState<LayoutContextType['width']>(20);
  const [height, setHeight] = useState<LayoutContextType['width']>(20);

  const [columnstype, setcolumnstype] =
    useState<LayoutContextType['columnstype']>('stretch');

  const [rowstype, setrowstype] =
    useState<LayoutContextType['rowstype']>('stretch');

  const contextValue: LayoutContextType = {
    LayoutType: layoutType,
    setLayoutType,
    size,
    setSize,
    color,
    setColor,
    setCount,
    count,
    gutter,
    setGutter,
    offset,
    setOffset,
    width,
    setWidth,
    height,
    setHeight,
    columnstype,
    setcolumnstype,
    rowstype,
    setrowstype,
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
