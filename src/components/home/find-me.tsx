import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from 'next-i18next';
import { SocialLinkGmail, SocialLinkLinkedin} from "@/components/social-links/";

const HomeFindMe = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="find-me"
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign={'center'} p={2}>
          <Typography variant="h4">{t("HIRE_TALKS")}</Typography>
          <SocialLinkGmail></SocialLinkGmail>
          <SocialLinkLinkedin></SocialLinkLinkedin>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFindMe;
