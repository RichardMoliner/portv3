/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Container,
  List,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Grid,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { ITalk } from '@/interfaces/talks';
import { IVolunteerWork } from '@/interfaces/volunteer-work';

export interface IParceiros {
  name: string
  logo: string
}

const HomeTechTalks = () => {
  const { t } = useTranslation();

  const [talks, setTalks] = useState<any>([]);
  const [volunteers, setVolunteers] = useState<any>([]);

  useEffect(() => {
    setTalks(t('TALKS', { returnObjects: true }));
    setVolunteers(t('VOLUNTEER_WORKS', { returnObjects: true }));
  }, [t]);

  return (
    <Box
      id="tech-talks"
      sx={{
        pt: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={6} xs={12}>
          <Divider variant="inset" sx={{borderWidth: 2, borderColor: 'secondary.main', width: '60px', marginLeft: 0}}/>

            <h3>{t('TECH_TALKS')}</h3>
            <List
              sx={{
                width: '100%',
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 2,
              }}
            >
              {talks.map((talk: ITalk, index: number) => {
                return (
                  <>
                    {!!index && <Divider variant="inset" component="li" />}
                    <ListItem alignItems="flex-start" key={index}>
                      <ListItemAvatar>
                        <Avatar alt="Logo Event" src={talk.logo} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={talk.talk}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {talk.event}
                            </Typography>
                            <br></br>
                            {talk.local} | {talk.date}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </>
                );
              })}
            </List>
          </Grid>

          <Grid item lg={6} xs={12}>
          <Divider variant="inset" sx={{borderWidth: 2, borderColor: 'secondary.main', width: '60px', marginLeft: 0}}/>

            <h3>{t('VOLUNTEER')}</h3>

            <List
              sx={{
                width: '100%',
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 2,
              }}
            >
              {volunteers.map((volunteer: IVolunteerWork, index: number) => {
                return (
                  <>
                    {!!index && <Divider variant="inset" component="li" />}
                    <ListItem alignItems="flex-start" key={`item-volunteer-${index}`}>
                      <ListItemAvatar>
                        <Avatar alt="Logo Event" src={volunteer.logo} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={volunteer.event}
                        secondary={
                          <React.Fragment>
                            {volunteer.local} | {volunteer.date}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeTechTalks;
