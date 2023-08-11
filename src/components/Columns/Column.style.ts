import styled, { css } from 'styled-components';
interface StylePropsTypes {
  columnstype: 'stretch' | 'center' | 'top' | 'bottom';
  offset?: number;
  height?: number;
  gutter?: number;
  color?: string;
}
const flexDir = {
  stretch: 'column',
  top: 'column',
  bottom: 'column-reverse',
  center: 'column',
};
export const MainContainer = styled.div<StylePropsTypes>`
  outline: none;
  outline-offset: -5px;
  position: relative;
  pointer-events: none;
  ${({ columnstype }) =>
    columnstype === 'stretch' ? 'width: 100%;' : 'min-width: 100%;'}
  min-width: 100%;
  display: flex;
  ${({ gutter }) => `row-gap: ${gutter}px;`}
  ${({ columnstype }) => `flex-direction: ${flexDir[columnstype]};`}
${({ columnstype }) => columnstype === 'center' && 'justify-content: center;'}
`;

const OneColumnBase = css<StylePropsTypes>`
  ${({ columnstype, height, color }) => css`
    height: ${columnstype === 'stretch' ? '100%' : `${height}px`};
    ${columnstype === 'stretch' && 'flex: 1;'}
    border: none;
    width: 100%;
    background-color: ${color};
    ${columnstype === 'stretch' ? '' : 'flex-shrink: 0;'}
  `}
`;

export const OneColumn = styled.div<StylePropsTypes>`
  ${OneColumnBase}
`;

export const FirstChild = styled.div<StylePropsTypes>`
  ${OneColumnBase}
  ${({ columnstype, offset }) => {
    if (columnstype === 'top') return `margin-top: ${offset}px;`;
    if (columnstype === 'bottom') return `margin-bottom: ${offset}px;`;
    return '';
  }}
`;
