import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Container,
  TextField,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const boxStyle = {
    backgroundColor: "#ffcccb",
    padding: "20px",
    position: "relative",
  };
  const popupStyle = {
    backgroundColor: "#11EFEF",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    width: "80%",
    position: "relative",
    left: "10%",
    top: "-50px",
    zIndex: 1,
  };
  const headingStyle = { fontSize: { lg: "20px", xs: "16px" } };
  const contentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "20px",
  };
  const iconStyle = {
    display: "flex",
    gap: "10px",
  };

  const year = new Date().getFullYear();

  return (
    <Box mt="80px" sx={boxStyle}>
      <Paper elevation={3} sx={popupStyle}>
        <Typography fontSize="22px" lineHeight="35px">
          Ready to get started?
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#Register"
          sx={{ background: "#ff2625", padding: "3px 20px" }}
        >
          <Typography variant="button" display="block">
            GET START
          </Typography>
        </Button>
      </Paper>
      <Container maxWidth="lg" sx={contentStyle}>
        <Box>
          <Typography fontWeight={500} sx={headingStyle} mb="23px" mt="30px">
            Gym Tracker
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Check out the best effective exercises tracker
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight={500} sx={headingStyle} mb="23px" mt="30px">
            Subscribe to get important updates
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
            <Button
              variant="contained"
              color="error"
              href="#exercises"
              sx={{ background: "#ff2625", padding: "8px 20px" }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography fontWeight={500} sx={headingStyle} mb="23px" mt="30px">
            Follow Us
          </Typography>
          <Box sx={iconStyle}>
            <YouTubeIcon fontSize="small" />
            <LinkedInIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={500} sx={headingStyle} mb="23px" mt="30px">
            Call Us
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            +91 8077537193
          </Typography>
        </Box>
      </Container>
      <Divider sx={{ borderColor: "white", margin: "10px 0" }} />
      <Container maxWidth="lg">
        <Typography variant="caption" display="block" gutterBottom>
          @{year} Fitness tracker
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
