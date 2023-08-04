import React, { CSSProperties, FC } from 'react';

import { ColumnProps, FlexDirection } from './Column.type';

const Column: FC<ColumnProps> = ({
  columnType = 'stretch',
  count = 10,
  offset = 0,
  width,
  color = 'ff00003b',
}) => {
  const flexDir: Record<typeof columnType, FlexDirection> = {
    stretch: 'column',
    left: 'column',
    right: 'column-reverse',
    center: 'column',
  };
  const mainStyle: CSSProperties = {
    outline: 'none',
    outlineOffset: '-5px',
    position: 'relative',
    pointerEvents: 'none',
    ...(columnType === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minHeight: '100%',
    display: 'flex',
    columnGap: '30px',
    flexDirection: flexDir[columnType],
    ...(columnType === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(columnType === 'right' ? { marginRight: `${offset}px` } : {}),
    ...(columnType === 'center' || columnType === 'left'
      ? { marginLeft: `${offset}px` }
      : {}),
  };
  const lastChildStyle: CSSProperties = {
    ...(columnType === 'center' ? { marginRight: `${offset}px` } : {}),
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
        .map((ele, i) => {
          if (i === 0)
            return (
              <div
                style={{ ...oneColumnStyle, ...firstChildStyle }}
                key={`columnChild-${i}`}></div>
            );
          if (i === Array(count).length)
            return (
              <div
                style={{ ...oneColumnStyle, ...lastChildStyle }}
                key={`columnChild-${i}`}></div>
            );
          return <div style={oneColumnStyle} key={`columnChild-${i}`}></div>;
        })}
    </div>
  );
};

export default Column;
