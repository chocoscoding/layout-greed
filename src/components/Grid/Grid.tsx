import { CSSProperties, FC, useEffect, useState } from 'react';

import { GridProps } from './Grid.types';

const Grid: FC<GridProps> = ({ size, color = 'ff00003b' }) => {
  const mainStyle: CSSProperties = {
    position: 'relative',
    pointerEvents: 'none',
  };
  const gridVerticalCont: CSSProperties = {
    display: 'flex',
  };
  const gridHorizontalCont: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '0px',
  };
  const gridVertical: CSSProperties = {
    height: '100vh',
    width: '1px',
    marginRight: `${size}px`,
    backgroundColor: color,
    border: 'none',
    display: 'block',
  };
  const gridHorizontal: CSSProperties = {
    height: '1px',
    width: '100vw',
    marginBottom: `${size}px`,
    backgroundColor: color,
    border: 'none',
    display: 'block',
  };

  //useState to hold width and height
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const trigger = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    trigger();
    //set width and height on resize event and cleanup
    window.addEventListener('resize', trigger);
    return () => window.removeEventListener('resize', trigger);
  }, []);
  return (
    <div style={mainStyle} data-testid="gridCont">
      <section style={gridHorizontalCont} data-testid="horizontalGridCont">
        {Array(height)
          .fill(0)
          .map((ele, i) => (
            <div key={`horizontal__${i}`} style={gridHorizontal}></div>
          ))}
      </section>
      <section style={gridVerticalCont} data-testid="verticalGridCont">
        {Array(width)
          .fill(0)
          .map((ele, i) => (
            <div key={`vertical__${i}`} style={gridVertical}></div>
          ))}
      </section>
    </div>
  );
};

export default Grid;
