import { Theme } from '@material-ui/core';

export type IThemeType = 'orbita' | 'nutror';

export default interface ITheme extends Theme { themeName: IThemeType };
