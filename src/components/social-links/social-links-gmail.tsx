import { SocialLink } from '@/interfaces/social-link';
import { FC } from 'react';
import SocialLinkItem from './social-links-item';


const SocialLinkGmail: FC = () => {
  const socialLink: SocialLink = {
    name: 'Email',
    link: 'mailto:richardmoliner@gmail.com',
    icon: '/icons/gmail.svg'
  };

  return (
    <>
      <SocialLinkItem key={socialLink.name} item={socialLink} />
    </>
  );
};

export default SocialLinkGmail;