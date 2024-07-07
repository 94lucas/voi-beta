
// TextInputField.tsx
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { InputEntries } from './styles';

interface TextInputFieldProps extends TextInputProps {
  placementText?: string;
}

export function Input({ placementText,...props }: TextInputFieldProps) {
  return (
    <>
      <InputEntries
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={placementText}
        multiline={true} />
    </>
  );
};