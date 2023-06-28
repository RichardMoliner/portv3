import { SocialLink } from '@/interfaces/social-link';
import { FC } from 'react';
import SocialLinkItem from './social-links-item';


const SocialLinkGitHub: FC = () => {
  const socialLink: SocialLink = {
    name: 'Github',
    link: 'https://www.github.com/daicambruzzi/',
    icon: '/icons/github.svg',
  };

  return (
    <>
      <SocialLinkItem key={socialLink.name} item={socialLink} />
    </>
  );
};

export default SocialLinkGitHub;