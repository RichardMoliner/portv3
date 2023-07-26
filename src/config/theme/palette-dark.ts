import { PaletteOptions } from '@mui/material';
import { common, grey } from '@mui/material/colors';

const paletteDark: PaletteOptions = {
  mode: 'dark',
  background: {
    default: common.white,
    paper: common.white,
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
    disabled: grey[300],
  },
};

export default paletteDark;
