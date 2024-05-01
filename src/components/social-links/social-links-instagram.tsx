import { SocialLink } from '@/interfaces/social-link';
import { FC } from 'react';
import SocialLinkItem from './social-links-item';


const SocialLinkInstagram: FC = () => {
  const socialLink: SocialLink = {
    name: 'Instagram',
    link: 'https://www.instagram.com/richardmoliner/',
    icon: '/icons/instagram.svg',
  };

  return (
    <>
      <SocialLinkItem key={socialLink.name} item={socialLink} />
    </>
  );
};

export default SocialLinkInstagram;
