import { Theme as MaterialTheme } from '@material-ui/core';
import { blue, teal, pink, purple, indigo, deepPurple, red, lightBlue, cyan } from '@material-ui/core/colors';
import createTheme from './theme';

export type themeName = 'orbita' | 'nutror' | 'blinket';
export type Theme = MaterialTheme & { themeName: themeName };
export type color = typeof blue | typeof teal | typeof pink;

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

export const getTheme = (theme: themeName): Theme  => {
  const t = createTheme(themes[theme]);
  return { themeName: theme, ...t };
};

export const listThemes = (): Theme[] => {
  const t: Theme[] = [];
  Object.keys(themes).forEach((theme: themeName) => t.push(getTheme(theme)));
  return t;
}
