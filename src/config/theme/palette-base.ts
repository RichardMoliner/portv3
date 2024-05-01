import { PaletteOptions } from '@mui/material';
import { common } from '@mui/material/colors';

const paletteBase: Partial<PaletteOptions> = {
  background: {
    default: common.white
  },
  primary: {
    light: '#9FF1D2',
    main: '#1E2640',
    dark: '#0D6A69',
    contrastText: '#F3EAC0',
  },
  secondary: {
    light: '#D4D4D4',
    main: '#D4D4D4',
    dark: '#D4D4D4',
    contrastText: '#FF66C4',
  },
};

export default paletteBase;
