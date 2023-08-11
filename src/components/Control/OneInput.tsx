import { ReactNode, FC } from 'react';

import { OneInputContainer, PTag } from './Control.style';

interface OneInputType {
  label: string;
  children: ReactNode;
}

const OneInput: FC<OneInputType> = ({ label, children }) => {
  return (
    <OneInputContainer>
      <PTag>{label}</PTag>
      {children}
    </OneInputContainer>
  );
};

export default OneInput;
