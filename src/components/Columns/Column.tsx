import React, { CSSProperties, FC } from 'react';

import { ColumnProps } from './Column.type';

const Column: FC<ColumnProps> = ({
  columnType = 'stretch',
  count = 10,
  offset = 0,
  width,
  color = 'ff00003b',
}) => {
  const mainStyle: CSSProperties = {
    outline: 'none',
    outlineOffset: '-5px',
    position: 'relative',
    pointerEvents: 'none',
    ...(columnType === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minHeight: '100%',
    display: 'flex',
    columnGap: '30px',
    justifyContent: 'right',
    // ...(columnType !== 'stretch' ? { justifyContent: columnType } : {}),
    ...(columnType === 'center' || columnType === 'left'
      ? { paddingLeft: `${offset}px` }
      : {}),
    ...(columnType === 'center' || columnType === 'right'
      ? { paddingRight: `${offset}px` }
      : {}),
  };
  const oneColumnStyle: CSSProperties = {
    width: `${columnType === 'stretch' ? '100%' : `${width}px`}`,
    ...(columnType === 'stretch' && { flex: 1 }),
    border: '1px solid red',
    height: '100%',
    backgroundColor: color,
    ...(columnType === 'stretch' ? {} : { flexShrink: 0 }),
  };
  return (
    <div style={mainStyle} data-testid="columnCont">
      {Array(count)
        .fill(0)
        .map((ele, i) => (
          <div style={oneColumnStyle} key={`columnChild-${i}`}></div>
        ))}
    </div>
  );
};

export default Column;
