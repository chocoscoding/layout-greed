import { ReactNode, FC, CSSProperties } from 'react';
interface OneInputType {
  label: string;
  children: ReactNode;
}
const OneInput: FC<OneInputType> = ({ label, children }) => {
  const oneInputStyle: CSSProperties = {
    minWidth: '50px',
  };
  const pTag: CSSProperties = {
    color: 'white',
    margin: '0 0 5px 0 ',
    textAlign: 'left',
  };
  return (
    <div style={oneInputStyle}>
      <p style={pTag}>{label}</p>
      {children}
    </div>
  );
};

export default OneInput;
