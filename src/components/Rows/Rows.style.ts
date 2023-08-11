import styled, { css } from 'styled-components';

interface StylePropsTypes {
  rowstype: 'stretch' | 'center' | 'left' | 'right';
  offset?: number;
  width?: number;
  gutter?: number;
  color?: string;
}
const flexDir = {
  stretch: 'row',
  left: 'row',
  right: 'row-reverse',
  center: 'row',
};
export const MainContainer = styled.div<StylePropsTypes>`
  outline: none;
  outline-offset: -5px;
  position: relative;
  pointer-events: none;
  ${({ rowstype }) =>
    rowstype === 'stretch' ? 'width: 100%;' : 'min-width: 100%;'}
  min-height: 100%;
  display: flex;
  ${({ gutter }) => `column-gap: ${gutter}px;`}
  ${({ rowstype }) => `flex-direction: ${flexDir[rowstype]};`}
  ${({ rowstype }) => rowstype === 'center' && 'justify-content: center;'}
`;
const OneColumnBase = css<StylePropsTypes>`
  ${({ rowstype, width, color }) => css`
    width: ${rowstype === 'stretch' ? '100%' : `${width}px`};
    ${rowstype === 'stretch' && 'flex: 1;'}
    border: none;
    height: 100%;
    background-color: ${color};
    ${rowstype === 'stretch' ? '' : 'flex-shrink: 0;'}
  `}
`;

export const OneColumn = styled.div<StylePropsTypes>`
  ${OneColumnBase}
`;

export const FirstChild = styled.div<StylePropsTypes>`
  ${OneColumnBase}
  ${({ rowstype, offset }) => {
    if (rowstype === 'right') return `margin-right: ${offset}px;`;
    if (rowstype === 'left') return `margin-left: ${offset}px;`;
    return '';
  }}
`;
