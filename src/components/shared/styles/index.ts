import { Theme as MaterialTheme } from '@material-ui/core';
import { blue, teal, pink, purple, indigo, deepPurple, red, lightBlue, cyan } from '@material-ui/core/colors';
import createTheme from './theme';

export type ThemeName = 'orbita' | 'nutror' | 'blinket';
export type Theme = MaterialTheme & { themeName: ThemeName };
export type Color = typeof blue | typeof teal | typeof pink;

export const themes = {
  alumy: deepPurple,
  blinket: pink,
  jobzz: indigo,
  nutror: teal,
  orbita: blue,
  slobodan: red,
  segredo: lightBlue,
  segredo2: cyan,
  telescope: purple
}

export const getTheme = (theme: ThemeName): Theme  => {
  const t = createTheme(themes[theme]);
  return { themeName: theme, ...t };
};

export const listThemes = (): Theme[] => {
  return Object.keys(themes).map((theme: ThemeName) => getTheme(theme));
}
