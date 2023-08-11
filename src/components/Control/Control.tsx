import { CSSProperties, useContext } from 'react';

import CloseIcon from './CloseIcon';
import {
  ControlLine,
  MainContainer,
  TextInput,
  TextInput2,
  TypeContainer,
  TypeSelector,
} from './Control.style';
import OneInput from './OneInput';
import LayoutContext from '../context/LayoutProvider';

const Control = () => {
  const {
    LayoutType,
    setLayoutType,
    size,
    setSize,
    color,
    setColor,
    count,
    setCount,
    gutter,
    setGutter,
    offset,
    setOffset,
    width,
    setWidth,
    height,
    setHeight,
    columnstype,
    setcolumnstype,
    rowstype,
    setrowstype,
  } = useContext(LayoutContext);
  const iconStyle: CSSProperties = {
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const disableOffset = () => {
    if (LayoutType === 'Columns') {
      if (columnstype === 'stretch' || columnstype === 'center') return true;
      return false;
    }
    if (LayoutType === 'Rows') {
      if (rowstype === 'stretch' || rowstype === 'center') return true;
      return false;
    }
  };

  return (
    <MainContainer>
      <TypeContainer>
        <TypeSelector
          name=""
          id=""
          value={LayoutType}
          onChange={(e) => setLayoutType(e.target.value as typeof LayoutType)}>
          <option value="Grid">Grid</option>
          <option value="Rows">Rows</option>
          <option value="Columns">Columns</option>
        </TypeSelector>

        <CloseIcon style={iconStyle} />
      </TypeContainer>

      {/* first row */}
      <ControlLine>
        {LayoutType === 'Grid' ? (
          <OneInput label="Size">
            <TextInput
              type="number"
              value={size}
              onChange={(e) => setSize(~~e.target.value)}
            />
            {/* <TextInput type="number"  value={} onChange={(e) => (e.target.value)}/> */}
          </OneInput>
        ) : null}
        {LayoutType !== 'Grid' ? (
          <OneInput label="Count">
            <TextInput
              type="number"
              value={count}
              onChange={(e) => setCount(~~e.target.value)}
            />
          </OneInput>
        ) : null}
        <OneInput label="Color">
          <TextInput2
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </OneInput>
      </ControlLine>

      {/* .................. */}
      {LayoutType !== 'Grid' ? (
        <>
          <ControlLine>
            {LayoutType === 'Rows' ? (
              <OneInput label="Type">
                <TypeSelector
                  name=""
                  id=""
                  value={rowstype}
                  onChange={(e) =>
                    setrowstype(e.target.value as typeof rowstype)
                  }>
                  <option value="stretch">stretch</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="center">center</option>
                </TypeSelector>
              </OneInput>
            ) : null}
            {LayoutType === 'Columns' ? (
              <OneInput label="Type">
                <TypeSelector
                  name=""
                  id=""
                  value={columnstype}
                  onChange={(e) =>
                    setcolumnstype(e.target.value as typeof columnstype)
                  }>
                  <option value="stretch">stretch</option>
                  <option value="top">top</option>
                  <option value="bottom">bottom</option>
                  <option value="center">center</option>
                </TypeSelector>
              </OneInput>
            ) : null}
            {LayoutType === 'Columns' ? (
              <OneInput label="Height">
                <TextInput
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(~~e.target.value)}
                />
              </OneInput>
            ) : null}
            {LayoutType === 'Rows' ? (
              <OneInput label="Width">
                <TextInput
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(~~e.target.value)}
                />
              </OneInput>
            ) : null}
            <OneInput label="Offset">
              <TextInput
                disabled={disableOffset()}
                type="number"
                value={offset}
                onChange={(e) => setOffset(~~e.target.value)}
              />
            </OneInput>
          </ControlLine>
          <ControlLine>
            <OneInput label="Gutter">
              <TextInput
                type="number"
                value={gutter}
                onChange={(e) => setGutter(~~e.target.value)}
              />
            </OneInput>
          </ControlLine>
        </>
      ) : null}
    </MainContainer>
  );
};

export default Control;
