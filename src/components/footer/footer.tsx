import React, { FC } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';

const Footer: FC = () => {
  return (
    <>
      <Box component='footer'
        sx={{
          backgroundColor: 'primary.main',
          pt: 2, pb: 2,
          color: 'secondary.main'
        }}
      >
        <Container>
          <Grid container>
            <Grid item>
              <Typography>created by <strong>Richard Moliner Júnior</strong> | 2024</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
