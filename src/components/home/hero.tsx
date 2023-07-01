import React, { FC } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { SocialLinks } from '@/components/social-links/';
import { Logo } from '@/components/logo';

const HomeHero: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      id='hero'
      sx={{
        pt: 2,
        backgroundColor: 'background.default',
        width: '100%'
      }}
    >
      <Container>
        <Grid container sx={{ width: '100%' }} alignItems={'center'}>
          <Grid item lg={6}
            xs={12} p={2}>
            <Logo />
            <Typography variant='h2'>{t('JOBS')}</Typography>

            <Grid container pt={2}>
              <Grid item xs={12} textAlign={'center'}>
                <SocialLinks></SocialLinks>
              </Grid>
            </Grid>

            <Grid container pt={2} alignItems={'center'}>
              <Grid item lg={1} xs={3}>
                <Typography variant='h1'>+10</Typography>
              </Grid>
              <Grid item lg={5} xs={9}>
                <Typography ml={2} variant='h4'>{t('LABEL_YEARS_EXPERIENCE_AREA')}</Typography>
              </Grid>
              <Grid item lg={1} xs={3}>
                <Typography variant='h1'>+12</Typography>
              </Grid>
              <Grid item lg={5} xs={9}>
                <Typography ml={2} variant='h4'>{t('LABEL_YEARS_EXPERIENCE_DEVELOPMENT')}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ textAlign: 'end' }}>
            <Box
              component='img'
              sx={{
                maxWidth: '100%',
                maxHeight: '600px',
                borderRadius: 3
              }}
              alt='Image Dai'
              src='/images/daiana-cambruzzi.png' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
