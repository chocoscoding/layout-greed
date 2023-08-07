import React, { CSSProperties } from 'react';

const Control = () => {
  const mainStyle: CSSProperties = {
    border: '1px solid red',
    width: '300px',
    height: 'fit-content',
    maxHeight: '300px',
    position: 'absolute',
    top: '7px',
    right: '7px',
    borderRadius: '5px',
  };
  return (
    <div style={mainStyle}>
      <p>jij</p>
    </div>
  );
};

export default Control;
