import React, { CSSProperties, useContext } from 'react';

import { FlexDirection } from './Rows.type';
import LayoutContext from '../context/LayoutProvider';

const Rows = () => {
  const {
    rowsType = 'stretch',
    count = 10,
    offset = 0,
    width = 50,
    gutter = 10,
    color = 'ff00003b',
  } = useContext(LayoutContext);
  const flexDir: Record<typeof rowsType, FlexDirection> = {
    stretch: 'row',
    left: 'row',
    right: 'row-reverse',
    center: 'row',
  };
  const mainStyle: CSSProperties = {
    outline: 'none',
    outlineOffset: '-5px',
    position: 'relative',
    pointerEvents: 'none',
    ...(rowsType === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minHeight: '100%',
    display: 'flex',
    columnGap: `${gutter}px`,
    flexDirection: flexDir[rowsType],
    ...(rowsType === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(rowsType === 'right' ? { marginRight: `${offset}px` } : {}),
    ...(rowsType === 'left' ? { marginLeft: `${offset}px` } : {}),
  };
  const oneColumnStyle: CSSProperties = {
    width: `${rowsType === 'stretch' ? '100%' : `${width}px`}`,
    ...(rowsType === 'stretch' && { flex: 1 }),
    border: 'none',
    height: '100%',
    backgroundColor: color,
    ...(rowsType === 'stretch' ? {} : { flexShrink: 0 }),
  };
  return (
    <div style={mainStyle} data-testid="rowsCont">
      {Array(count)
        .fill(0)
        .map((ele, i) => {
          if (i === 0)
            return (
              <div
                style={{ ...oneColumnStyle, ...firstChildStyle }}
                key={`rowsChild-${i}`}></div>
            );
          return <div style={oneColumnStyle} key={`rowsChild-${i}`}></div>;
        })}
    </div>
  );
};

export default Rows;
