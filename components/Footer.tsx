import { EmailRounded } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography, Box, IconButton, Container } from "@mui/material";
import Image from "next/image";

export default function Footer() {
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
            width="123.46"
            height="99"
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
              href="mailto:handyman.info.portland@gmail.com"
              target="_blank"
              aria-label="Send us an email"
            >
              <EmailRounded color="primary" fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/share/1AznZ2QwJo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
            >
              <FacebookIcon color="primary" fontSize="large" />
            </IconButton>
            <IconButton
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
