import React, { FC, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { SocialLinks } from '@/components/social-links/';

import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navigation } from '@/components/navigation';
import { useTheme } from '@mui/material/styles';
import { Menu, Close } from '@mui/icons-material';

const HomeHero: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <Box
      id='hero'
      sx={{
        pt: 2,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize: 'auto',
        width: '100%',
        height: '540px',
        backgroundImage:{lg: "url('images/background.svg')", md: "url('images/background.svg')", xs: "url('images/background-mobile.svg')"}
      }}

    >
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu sx={{ color: 'secondary.main' }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                paddingBottom: '45vh',
                backgroundColor: 'background.default',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close sx={{ color: 'secondary.main' }} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
      <Container>
        <Box>
        <Grid container sx={{ width: '100%' }} justifyContent={'end'}>
          <Grid item lg={6} md={6} xs={12} p={{xs:0, md:2, lg:2}}>
            <Typography variant='h4'>DAIANA CAMBRUZZI</Typography>

            <Typography variant='h4'>{t('JOBS')}</Typography>

            <Grid container pt={2}>
              <Grid item xs={6} md={8} lg={12} textAlign={'center'}>
                <SocialLinks></SocialLinks>
              </Grid>
            </Grid>

            <Grid container pt={2} alignItems={'center'} >
              <Grid item lg={12} xs={9} display={'flex'}>
                <Typography variant='h3'>+10</Typography>
                <Typography ml={2} variant='h5'>{t('LABEL_YEARS_EXPERIENCE_AREA')}</Typography>
              </Grid>
              <Grid item lg={12} xs={9} display={'flex'}>
                <Typography variant='h3'>+12</Typography>
                <Typography ml={2} variant='h5'>{t('LABEL_YEARS_EXPERIENCE_DEVELOPMENT')}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
