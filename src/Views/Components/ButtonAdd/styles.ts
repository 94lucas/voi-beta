
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  right:20px;
  background-color:${({ theme }) => theme.COLORS.SECONDARY};
  border: 2px solid ${({ theme }) => theme.COLORS.GOLD};
  height:42px;
  width: 42px;
  border-radius:5px;
  justify-content:center;
  align-items: center;
  top:5px;
`;

export const Button = styled.TouchableOpacity`
 
  align-items:center;
  justify-content:center;
  text-align:center;
  background-color:${({ theme }) => theme.COLORS.PRIMARY};
  
`
export const TextButton = styled.Text`
  color:${({ theme }) => theme.COLORS.PRIMARY};
  font-size:44px;
`

