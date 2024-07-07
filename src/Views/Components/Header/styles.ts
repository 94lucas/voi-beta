import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 8px;
  justify-content:center;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  font-family: monospace;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;