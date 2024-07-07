import 'styled-components/native';
import { MyTheme } from '../../themes';

declare module 'styled-components/native' {
  type ThemeType = typeof MyTheme;

  export interface DefaultTheme extends ThemeType { }
}