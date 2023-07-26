import { SocialLink } from '@/interfaces/social-link';
import { Box, Link } from '@mui/material';
import { FC } from 'react';

interface SocialLinkItemProps {
  item: SocialLink
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/daicambruzzi/',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/daiana-cambruzzi-avila/',
    icon: '/icons/linkedin.svg',
  },
  {
    name: 'Email',
    link: 'mailto:daiana.avila@gmail.com',
    icon: '/icons/gmail.svg',
  },
  {
    name: 'Github',
    link: 'https://www.github.com/daicambruzzi/',
    icon: '/icons/github.svg',
  },
];

const SocialLinksItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component='li'
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 2,
    }}
  >
    <Link
      target='_blank'
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 48,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
);

export default SocialLinksItem;