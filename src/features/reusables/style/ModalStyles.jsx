import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0%;
`;

export const TextWrapper = styled.div`
  margin: 10% 0%;
`;

export const Button = styled.button`
  margin: 2% 0%;
  padding: 8px 16px;
  background-color: blue;
  color: white;
  width: 70%;
  border-radius: 8px;
`;
