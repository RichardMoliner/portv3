import { PaletteOptions } from '@mui/material';
import { grey, common } from '@mui/material/colors';

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#1E2640', //'#fdfdfd',
    paper: common.white,
  },
  text: {
    primary: grey[900],
    secondary: '#717171', // grey[700],
    disabled: grey[500],
  },
};

export default palette;
