import { Theme as MaterialTheme } from '@material-ui/core';

export type ThemeName = 'orbita' | 'nutror' | 'blinket';
export type Theme = MaterialTheme & { themeName: ThemeName };
