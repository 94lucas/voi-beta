import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  align-self:center;
`;

export const Message = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;