import React, { CSSProperties, useContext } from 'react';

import { FlexDirection } from './Columns.type';
import LayoutContext from '../context/LayoutProvider';

const Columns = () => {
  const {
    columnstype = 'stretch',
    count = 10,
    offset = 0,
    height = 50,
    gutter = 10,
    color = 'ff00003b',
  } = useContext(LayoutContext);
  const flexDir: Record<typeof columnstype, FlexDirection> = {
    stretch: 'column',
    top: 'column',
    bottom: 'column-reverse',
    center: 'column',
  };
  const mainStyle: CSSProperties = {
    outline: 'none',
    outlineOffset: '-5px',
    position: 'relative',
    pointerEvents: 'none',
    ...(columnstype === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minWidth: '100%',
    display: 'flex',
    rowGap: `${gutter}px`,
    flexDirection: flexDir[columnstype],
    ...(columnstype === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(columnstype === 'top' ? { marginTop: `${offset}px` } : {}),
    ...(columnstype === 'bottom' ? { marginBottom: `${offset}px` } : {}),
  };
  const oneColumnStyle: CSSProperties = {
    height: `${columnstype === 'stretch' ? '100%' : `${height}px`}`,
    ...(columnstype === 'stretch' && { flex: 1 }),
    border: 'none',
    width: '100%',
    backgroundColor: color,
    ...(columnstype === 'stretch' ? {} : { flexShrink: 0 }),
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
          return <div style={oneColumnStyle} key={`columnsChild-${i}`}></div>;
        })}
    </div>
  );
};

export default Columns;
