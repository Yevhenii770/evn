import { EmailRounded } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography, Box, IconButton, Container } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const emailHref = isMobile
    ? "mailto:handyman.info.portland@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=handyman.info.portland@gmail.com";

  return (
    <Box
      sx={{
        height: "250px",
        backgroundColor: "#14151a",
        marginTop: "100px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "10px",
            height: "250px",
          }}
        >
          <Image
            src="/handyman_evn_logo_light.png"
            alt="Handyman EVN Logo"
            title="EVN Handyman - Professional Handyman Services in Portland"
            width="100"
            height="70"
          />
          <Typography
            paragraph
            textAlign="center"
            sx={{
              marginBottom: 0,
            }}
          >
            Copyright © 2025 EVN Handyman
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: "10px",
            }}
          >
            <IconButton
              component="a"
              href={emailHref}
              aria-label="Send us an email"
              {...(!isMobile
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <EmailRounded color="primary" fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=61568265928694"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
            >
              <FacebookIcon color="primary" fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://yelp.to/DWCUdJjJlj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp page"
            >
              <StoreIcon color="primary" fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
