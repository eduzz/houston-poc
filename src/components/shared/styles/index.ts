import { blue, teal, pink, purple, indigo, deepPurple, red, lightBlue, cyan } from '@material-ui/core/colors';
import createTheme from './theme';
import { Theme, ThemeName } from 'interfaces/Theme';


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

export const getTheme = (theme: ThemeName): Theme  => ({ themeName: theme, ...createTheme(themes[theme]) });

export const listThemes = (): Theme[] => Object.keys(themes).map((theme: ThemeName) => getTheme(theme));
