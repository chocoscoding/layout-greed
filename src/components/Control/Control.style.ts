import styled from 'styled-components';

export const MainContainer = styled.div`
  border: none;
  width: 300px;
  height: fit-content;
  max-height: 300px;
  position: absolute;
  top: 7px;
  right: 7px;
  border-radius: 5px;
  background-color: #222425;
  padding: 8px;
`;

export const TypeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffffff10;
`;

export const TypeSelector = styled.select`
  display: flex;
  background-color: #222425;
  height: 2rem;
  width: 100px;
  color: white;
  border-radius: 4px;
  border: none;
  &:hover {
    outline: 1px solid #ffffff10;
  }
`;

export const IconContainer = styled.div`
  color: white;
  border: none;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ControlLine = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
`;

const sharedTextInputStyles = `
border-radius: 4px;
background-color: transparent;
height: 1.9rem;
width: fit-content;
min-width: 50px;
color: white;
border:none;
&:hover{
    outline: 1px solid #ffffff10;
}
padding-left: 5px;
  &:disabled {
    opacity: 50%;
  }
`;

export const TextInput = styled.input`
  ${sharedTextInputStyles}
  max-width: 87px;
`;

export const TextInput2 = styled.input`
  ${sharedTextInputStyles}
`;
export const OneInputContainer = styled.div`
  min-width: 50px;
`;

export const PTag = styled.p`
  color: white;
  margin: 0 0 5px 0;
`;
