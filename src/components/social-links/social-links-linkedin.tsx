import { SocialLink } from '@/interfaces/social-link';
import { FC } from 'react';
import SocialLinkItem from './social-links-item';


const SocialLinkLinkedin: FC = () => {
  const socialLink: SocialLink = {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/richard-moliner/',
    icon: '/icons/linkedin.svg',
  };

  return (
    <>
      <SocialLinkItem key={socialLink.name} item={socialLink} />
    </>
  );
};

export default SocialLinkLinkedin;