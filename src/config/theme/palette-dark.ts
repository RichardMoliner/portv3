import { PaletteOptions } from '@mui/material';
import { grey } from '@mui/material/colors';

const paletteDark: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#1E2640',
    paper: '#222128',
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
    disabled: grey[300],
  },
};

export default paletteDark;
