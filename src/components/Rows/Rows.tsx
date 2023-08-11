import { useContext } from 'react';

import { MainContainer, OneColumn, FirstChild } from './Rows.style';
import LayoutContext from '../context/LayoutProvider';

const Rows = () => {
  const {
    rowstype = 'stretch',
    count = 10,
    offset = 0,
    width = 50,
    gutter = 10,
    color = 'ff00003b',
  } = useContext(LayoutContext);

  return (
    <MainContainer data-testid="rowsCont" rowstype={rowstype} gutter={gutter}>
      {Array(count)
        .fill(0)
        .map((ele, i) => {
          if (i === 0)
            return (
              <FirstChild
                key={`rowsChild-${i}`}
                rowstype={rowstype}
                offset={offset}
                width={width}
                color={color}></FirstChild>
            );
          return (
            <OneColumn
              key={`rowsChild-${i}`}
              rowstype={rowstype}
              width={width}
              color={color}></OneColumn>
          );
        })}
    </MainContainer>
  );
};

export default Rows;
