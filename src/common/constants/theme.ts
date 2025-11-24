import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 122, 204)',
  },
};
export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(64, 224, 208)',
  },
};
