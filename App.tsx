import { StatusBar } from 'react-native';

import Routes from './src/Routes';
import { MyTheme } from './themes'

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { DenialContextProvider } from './src/context/DenialContext';

export default function App() {

  return (
    <ThemeProvider theme={MyTheme}>
      <DenialContextProvider>
        <NavigationContainer>
          <StatusBar
            backgroundColor='transparent'
            barStyle={'light-content'}
            translucent />
          <Routes />
        </NavigationContainer>
      </DenialContextProvider>
    </ThemeProvider>
  );
}