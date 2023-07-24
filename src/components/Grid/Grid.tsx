import React, { CSSProperties, useEffect, useState } from 'react';

const Grid = () => {
  const gridVerticalCont: CSSProperties = {
    display: 'flex',
    border: '1px solid green',
  };
  const gridVertical: CSSProperties = {
    height: '100vh',
    width: '1px',
    marginRight: '10px',
    backgroundColor: 'red',
    border: '1px solid green',
  };

  //useState to hold width and height
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const trigger = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    //set width and height on resize event and cleanup
    window.addEventListener('resize', trigger);
    return () => window.removeEventListener('resize', trigger);
  }, []);
  return (
    <div>
      X
      <section style={gridVerticalCont}>
        {Array(width).map((ele, i) => (
          <div key={`vertical__${i}`} style={gridVertical}></div>
        ))}
      </section>
    </div>
  );
};

export default Grid;
