import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';

const Navigation: FC = () => {
  const { t } = useTranslation();

  const navigations = [
    {
      label: 'EXPERIENCES',
      path: 'experiences',
    },
    {
      label: 'TECH_TALKS',
      path: 'tech-talks',
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            pr: 4,
            whiteSpace: 'nowrap',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.contrastText',
            }),
            '& > div': { display: 'none' },
            '&.current>div': { display: 'block' },
            '&:hover': {
              textDecoration: 'none',
              color: 'secondary.contrastText',
              '&>div': {
                display: 'block',
              },
            },
          }}>
          <Typography variant='h4'> {t(label)} </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
