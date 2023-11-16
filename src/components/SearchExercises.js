import React, { useState } from "react";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";

const SearchExercises = () => {
  const [searchInput, setsearchInput] = useState("");

  function searchExercise() {
    console.log(searchInput);
    setsearchInput("");
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should know
      </Typography>
      <Box position="relative" mb="72px" ml="-150px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={searchExercise}
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
