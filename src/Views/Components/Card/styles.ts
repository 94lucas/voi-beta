import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  padding: 8px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 25px;
  min-width: 80%;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: monospace;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.CARD};
`;

export const Priority = styled(Description)``;
export const Time = styled(Description)``;
export const Importancy = styled(Description)``;
