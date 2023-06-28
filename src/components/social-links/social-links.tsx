import { FC } from 'react';
import SocialLinkGitHub from './social-links-github';
import SocialLinkInstagram from './social-links-instagram';
import SocialLinkGmail from './social-links-gmail';
import SocialLinkLinkedin from './social-links-linkedin';

const SocialLinks: FC = () => {
  return (
    <>
      <SocialLinkLinkedin></SocialLinkLinkedin>
      <SocialLinkGmail></SocialLinkGmail>
      <SocialLinkGitHub></SocialLinkGitHub>
      <SocialLinkInstagram></SocialLinkInstagram>
    </>
  );
};
export default SocialLinks;