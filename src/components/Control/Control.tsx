import React, { CSSProperties, FC, useContext, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import CloseIcon from './CloseIcon';
import { ControlsPropsType } from './Control.type';
import OneInput from './OneInput';
import LayoutContext from '../context/LayoutProvider';

const Control: FC<ControlsPropsType> = ({ customKeyBinding }) => {
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
  const [show, setShow] = useState(true);
  useHotkeys('shift+l' || customKeyBinding, () => setShow(!show), [show]);
  const disableOffset = () => {
    if (LayoutType === 'Columns') {
      if (columnstype === 'stretch' || columnstype === 'center') return true;
      return false;
    }
    if (LayoutType === 'Rows') {
      if (rowstype === 'stretch' || rowstype === 'center') return true;
      return false;
    }
    if (LayoutType === 'Grid') return false;
  };
  const disableOffsetForWidth = () => {
    if (LayoutType === 'Columns') {
      if (columnstype === 'stretch') return true;
      return false;
    }
    if (LayoutType === 'Rows') {
      if (rowstype === 'stretch') return true;
      return false;
    }
    return false;
  };
  const iconStyle: CSSProperties = {
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const mainContainerStyles: React.CSSProperties = {
    border: 'none',
    width: '90vw',
    minWidth: '270px',
    maxWidth: '300px',
    height: 'fit-content',
    maxHeight: '300px',
    position: 'fixed',
    top: '7px',
    right: '20px',
    borderRadius: '5px',
    backgroundColor: '#222425',
    padding: '8px',
    pointerEvents: 'all',
  };

  const typeContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '8px',
    borderBottom: '1px solid #ffffff15',
  };

  const typeSelectorStyles: React.CSSProperties = {
    display: 'flex',
    backgroundColor: '#222425',
    height: '2rem',
    width: '100px',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    outline: '1px solid #ffffff15',
    outlineWidth: '1px',
    outlineColor: '#ffffff15',
  };

  const controlLineStyles: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    margin: '15px 0',
  };

  const sharedTextInputStyles: React.CSSProperties = {
    borderRadius: '4px',
    backgroundColor: 'transparent',
    height: '1.9rem',
    width: 'fit-content',
    minWidth: '50px',
    color: 'white',
    border: 'none',
    paddingLeft: '5px',
    outline: '1px solid #ffffff10',
  };

  const textInputStyles: React.CSSProperties = {
    ...sharedTextInputStyles,
    maxWidth: '87px',
  };

  const textInput2Styles: React.CSSProperties = {
    ...sharedTextInputStyles,
  };
  const textInput3Styles: React.CSSProperties = {
    ...sharedTextInputStyles,
    maxWidth: '87px',
    ...(disableOffset() ? { opacity: '50%' } : {}),
  };
  const textInput4Styles: React.CSSProperties = {
    ...sharedTextInputStyles,
    maxWidth: '87px',
    ...(disableOffsetForWidth() ? { opacity: '50%' } : {}),
  };

  if (!show) return null;
  return (
    <>
      <section
        className="ba"
        style={mainContainerStyles}
        data-testid="controlsContainer">
        <div style={typeContainerStyles}>
          <select
            style={typeSelectorStyles}
            name=""
            id=""
            value={LayoutType}
            onChange={(e) =>
              setLayoutType(e.target.value as typeof LayoutType)
            }>
            <option value="Grid">Grid</option>
            <option value="Rows">Rows</option>
            <option value="Columns">Columns</option>
          </select>
          <span onClick={() => setShow(false)}>
            <CloseIcon style={iconStyle} />
          </span>
        </div>
        {/* first row */}
        <div style={{ ...controlLineStyles, gap: '20px' }}>
          {LayoutType === 'Grid' ? (
            <OneInput label="Size">
              <input
                className="inputStyle"
                style={textInputStyles}
                type="number"
                value={size}
                onChange={(e) => setSize(~~e.target.value)}
              />
            </OneInput>
          ) : null}
          {LayoutType !== 'Grid' ? (
            <OneInput label="Count">
              <input
                className="inputStyle"
                style={{ ...textInputStyles, width: '100%' }}
                type="number"
                value={count}
                onChange={(e) => setCount(~~e.target.value)}
              />
            </OneInput>
          ) : null}
          <OneInput label="Color">
            <input
              className="inputStyle"
              style={textInput2Styles}
              type="text"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </OneInput>
        </div>
        {/* .................. */}
        {LayoutType !== 'Grid' ? (
          <>
            <div style={controlLineStyles}>
              {LayoutType === 'Rows' ? (
                <OneInput label="Type">
                  <select
                    style={typeSelectorStyles}
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
                  </select>
                </OneInput>
              ) : null}
              {LayoutType === 'Columns' ? (
                <OneInput label="Type">
                  <select
                    style={typeSelectorStyles}
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
                  </select>
                </OneInput>
              ) : null}
              {LayoutType === 'Columns' ? (
                <OneInput label="Height">
                  <input
                    className="inputStyle"
                    style={textInputStyles}
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(~~e.target.value)}
                  />
                </OneInput>
              ) : null}
              {LayoutType === 'Rows' ? (
                <OneInput label="Width">
                  <input
                    className="inputStyle"
                    style={textInput4Styles}
                    disabled={disableOffsetForWidth()}
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(~~e.target.value)}
                  />
                </OneInput>
              ) : null}
              <OneInput label="Offset">
                <input
                  className="inputStyle"
                  style={textInput3Styles}
                  disabled={disableOffset()}
                  type="number"
                  value={offset}
                  onChange={(e) => setOffset(~~e.target.value)}
                />
              </OneInput>
            </div>
            <div style={controlLineStyles}>
              <OneInput label="Gutter">
                <input
                  className="inputStyle"
                  style={textInputStyles}
                  type="number"
                  value={gutter}
                  onChange={(e) => setGutter(~~e.target.value)}
                />
              </OneInput>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default Control;
