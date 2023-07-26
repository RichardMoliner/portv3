import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import experiencesData  from './experiences.data';
import { IExperience } from '@/interfaces/experiences';

const HomeExperiences = () => {
  const { t } = useTranslation();

  return (
    <Box
      id='experiences'
      sx={{
        pt: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} textAlign={'center'}> 
        
            <Typography variant='h3' pb={2}>
              {t('EXPERIENCES')}
              </Typography>
              <Divider
              variant="inset"
              sx={{ borderWidth: 2, borderColor: 'secondary.main', width: '60px', marginLeft: 0 }}
            />

          </Grid>
          <Grid item xs={12} alignItems={'center'} pt={1}> 

          {experiencesData.map((item: IExperience) => {
            return (
              <Grid item lg={12} xs={12} key={`item-${item.id}`} pb={4}>
                <Card variant='outlined' key={`${item.id}`} sx={{ height: '100%', display: 'inline-grid', boxShadow: 2 }}>
                  <CardContent>
                    <Typography color='text.primary' gutterBottom>
                      {t(`${item.title}`)}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 14 }} color='text.secondary'>
                      {t(`${item.company}`)}
                    </Typography>
                    <Typography variant='body2'>
                      {t(`${item.description}`)}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button target='_blank' href='https://www.linkedin.com/in/daiana-cambruzzi-avila/' size='small'>{t('LEARN_MORE')}</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeExperiences;
