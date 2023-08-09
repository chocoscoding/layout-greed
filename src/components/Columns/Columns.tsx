import React, { CSSProperties, useContext } from 'react';

import { FlexDirection } from './Columns.type';
import LayoutContext from '../context/LayoutProvider';

const Columns = () => {
  const {
    columnsType = 'stretch',
    count = 10,
    offset = 0,
    width = 50,
    gutter = 10,
    color = 'ff00003b',
  } = useContext(LayoutContext);
  const flexDir: Record<typeof columnsType, FlexDirection> = {
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
    ...(columnsType === 'stretch' ? { width: '100%' } : { minWidth: '100%' }),
    minWidth: '100%',
    display: 'flex',
    rowGap: `${gutter}px`,
    flexDirection: flexDir[columnsType],
    ...(columnsType === 'center' ? { justifyContent: 'center' } : {}),
  };
  const firstChildStyle: CSSProperties = {
    ...(columnsType === 'top' ? { marginTop: `${offset}px` } : {}),
    ...(columnsType === 'bottom' ? { marginBottom: `${offset}px` } : {}),
  };
  const oneColumnStyle: CSSProperties = {
    height: `${columnsType === 'stretch' ? '100%' : `${width}px`}`,
    ...(columnsType === 'stretch' && { flex: 1 }),
    border: 'none',
    width: '100%',
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
          return <div style={oneColumnStyle} key={`columnsChild-${i}`}></div>;
        })}
    </div>
  );
};

export default Columns;
