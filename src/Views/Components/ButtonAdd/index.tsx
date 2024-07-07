
import { useContext, useState } from 'react';
import { Button, ButtonContainer } from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title?: string;
}

export function ButtonAdd({ onPress, title, ...props }: ButtonProps) {

  return (
    <ButtonContainer>
      <Button onPress={onPress} {...props}>
        <MaterialIcons name="add" size={24} color="white" />
      </Button>
    </ButtonContainer>
  )
}




