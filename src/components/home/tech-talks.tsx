/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Tabs, Tab, List, Divider, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ITalk } from '@/interfaces/talks';
import { IVolunteerWork } from '@/interfaces/volunteer-work';

export interface IParceiros {
  name: string
  logo: string
};

const HomeTechTalks = () => {
  const { t } = useTranslation();

  const [talks, setTalks] = useState<any>([]);
  const [volunteers, setVolunteers] = useState<any>([]);
  const [labelEvents, setLabelEvents] = useState('');
  const [labelVolunteer, setLabelVolunteer] = useState('');
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    setTalks(t('TALKS', { returnObjects: true }));
    setVolunteers(t('VOLUNTEER_WORKS', { returnObjects: true }));
    setLabelVolunteer(t('VOLUNTEER'));
    setLabelEvents(t('EVENTS'));
  }, [t]);

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box
      id='tech-talks'
      sx={{
        pt: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth='lg'>
        <Tabs value={tab} onChange={handleChangeTab} centered sx={{ backgroundColor: 'secondary.light' }}>
          <Tab
            label={labelEvents} />
          <Tab label={labelVolunteer} />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <List sx={{
            width: '100%',
            backgroundColor: 'secondary.light',
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2
          }}>
            {talks.map((talk: ITalk, index: number) => {
              return (
                <>
                  {!!index && (<Divider variant='inset' component='li' />)}
                  <ListItem alignItems='flex-start' key={index}>
                    <ListItemAvatar>
                      <Avatar alt='Logo Event' src={talk.logo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={talk.talk}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component='span'
                            variant='body2'
                            color='text.primary'
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
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <List sx={{
            width: '100%',
            backgroundColor: 'secondary.light',
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2
          }}>
            {volunteers.map((volunteer: IVolunteerWork, index: number,) => {

              return (
                <>
                  {!!index && (<Divider variant='inset' component='li' />)}
                  <ListItem alignItems='flex-start' key={`item-volunteer-${index}`}>
                    <ListItemAvatar>
                      <Avatar alt='Logo Event' src={volunteer.logo} />
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
        </TabPanel>
      </Container>
    </Box>
  );
};

export default HomeTechTalks;
