import { StatusBar } from 'react-native';

import Routes from './src/Routes';
import  {MyTheme} from './themes/ThemesOptions'

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={'dark-content'}
        translucent />
        <Routes />
    </NavigationContainer>
  );
}