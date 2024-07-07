import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.CARD};
  align-items:center;
`;

export const ModalContainer = styled.Modal`

`;

export const Container2 = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  display: block;
  height: 100%;
  width:  100%;
  justify-content: center;
  align-items: center;
  padding:5px;
`;

export const Title = styled.Text`
  text-align:left;
  font-family:'monospace';
  font-size:18px;
`;

export const TextForm = styled.Text`
  font-family:'monospace';
  font-size:16px;
  padding-right:5px;
  color:${({ theme }) => theme.COLORS.TEXT};
`;

export const CloseButtonContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  padding:10px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const InsertButtonContainer = styled.View`
  flex-direction:row;
  padding:10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius:5px;
  border: 2px solid  ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;


