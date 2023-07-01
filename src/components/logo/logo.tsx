import React from 'react';
import { Box, Container } from '@mui/material';

const Logo = () => {
  return (
    <Container sx={{ width: 'fit-content', marginLeft: 'unset', pl: 0 }}>
      <Box
        component='img'
        sx={{
          maxHeight: 60,
          maxWidth: 400,
          minWidth: 300
        }}
        alt='Logo Daiana Cambruzzi'
        src="/images/logo-1.png" />
    </Container>
  );
};

export default Logo;
