import React, { CSSProperties, useContext } from 'react';

import { FlexDirection } from './Rows.type';
import LayoutContext from '../context/LayoutProvider';

const Rows = () => {
  const {
    rowstype = 'stretch',
    count = 10,
    offset = 0,
    width = 50,
    gutter = 10,
    color = 'ff00003b',
  } = useContext(LayoutContext);

  const flexDir: Record<typeof rowstype, FlexDirection> = {
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
    ...(rowstype === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minHeight: '100%',
    display: 'flex',
    columnGap: `${gutter}px`,
    flexDirection: flexDir[rowstype],
    ...(rowstype === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(rowstype === 'right' ? { marginRight: `${offset}px` } : {}),
    ...(rowstype === 'left' ? { marginLeft: `${offset}px` } : {}),
  };
  const oneColumnStyle: CSSProperties = {
    width: `${rowstype === 'stretch' ? '100%' : `${width}px`}`,
    ...(rowstype === 'stretch' && { flex: 1 }),
    border: 'none',
    height: '100%',
    backgroundColor: color,
    ...(rowstype === 'stretch' ? {} : { flexShrink: 0 }),
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
