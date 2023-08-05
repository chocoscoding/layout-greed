import React, { CSSProperties, FC } from 'react';

import { ColumnsProps, FlexDirection } from './Columns.type';

const Columns: FC<ColumnsProps> = ({
  columnsType = 'stretch',
  count = 10,
  offset = 0,
  width = 50,
  gutter = 10,
  color = 'ff00003b',
}) => {
  const flexDir: Record<typeof columnsType, FlexDirection> = {
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
    ...(columnsType === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minHeight: '100%',
    display: 'flex',
    columnGap: `${gutter}px`,
    flexDirection: flexDir[columnsType],
    ...(columnsType === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(columnsType === 'right' ? { marginRight: `${offset}px` } : {}),
    ...(columnsType === 'left' ? { marginLeft: `${offset}px` } : {}),
  };
  const lastChildStyle: CSSProperties = {};
  const oneColumnStyle: CSSProperties = {
    width: `${columnsType === 'stretch' ? '100%' : `${width}px`}`,
    ...(columnsType === 'stretch' && { flex: 1 }),
    border: 'none',
    height: '100%',
    backgroundColor: color,
    ...(columnsType === 'stretch' ? {} : { flexShrink: 0 }),
  };
  return (
    <div style={mainStyle} data-testid="columnsCont">
      {Array(count)
        .fill(0)
        .map((ele, i) => {
          if (i === 0)
            return (
              <div
                style={{ ...oneColumnStyle, ...firstChildStyle }}
                key={`columnsChild-${i}`}></div>
            );
          if (i === Array(count).length - 1)
            return (
              <div
                style={{ ...oneColumnStyle, ...lastChildStyle }}
                key={`columnsChild-${i}`}></div>
            );
          return <div style={oneColumnStyle} key={`columnsChild-${i}`}></div>;
        })}
    </div>
  );
};

export default Columns;
