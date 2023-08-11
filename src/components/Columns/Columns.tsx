import { useContext } from 'react';

import { FirstChild, MainContainer, OneColumn } from './Column.style';
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

  return (
    <MainContainer
      data-testid="columnsCont"
      columnstype={columnstype}
      gutter={gutter}>
      {Array(count)
        .fill(0)
        .map((ele, i) => {
          if (i === 0)
            return (
              <FirstChild
                key={`columnsChild-${i}`}
                columnstype={columnstype}
                height={height}
                offset={offset}
                color={color}></FirstChild>
            );
          return (
            <OneColumn
              key={`columnsChild-${i}`}
              columnstype={columnstype}
              height={height}
              color={color}></OneColumn>
          );
        })}
    </MainContainer>
  );
};

export default Columns;
