import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const HomeAboutMe = () => {
  const { t } = useTranslation()

  return (
    <Box
      id="about-me"
      sx={{
        pt: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} textAlign={'center'} pb={2} pt={2}>
            <Typography variant='h3'>{t('ABOUT_ME')}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Divider
              variant="inset"
              sx={{ borderWidth: 2, borderColor: 'secondary.main', width: '60px', marginLeft: 0 }}
            />

            <h3>DAIANA CAMBRUZZI</h3>
            <Typography color="text.primary" gutterBottom>
              {t('TEXT_ABOUT_ME')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} display={{ xs: 'none', md: 'grid', lg: 'grid' }} justifyContent={'end'}>
            <Box
              component="img"
              sx={{
                maxWidth: '100%',
                maxHeight: '540px',
                borderRadius: 3,
              }}
              alt="Image Dai"
              src="/images/daiana-cambruzzi-about-me.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeAboutMe
