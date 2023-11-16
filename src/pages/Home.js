import React from "react";
import Banner from "../components/Banner";
import Explainer from "../components/Explainer";
import Reviews from "../components/Reviews";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box>
        <Banner />
        <Explainer />
        <Reviews />
      </Box>
    </>
  );
};

export default Home;
