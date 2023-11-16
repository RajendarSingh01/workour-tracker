import React, { useEffect, useState } from "react";
import { Typography, Stack, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import { endpoints, HEADERS } from "../APIs/ExercisesApiData";
import axios from "axios";

const ExercisesResult = () => {
  const { bodyPartName } = useSelector((state) => state.selectedBodyPart);
  const [bodyPartExercises, setBodyPartExercises] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${endpoints.bodyPartsExercises + bodyPartName}?limit=20`,
        {
          headers: HEADERS,
        }
      );
      setBodyPartExercises(data);
      console.log(data);
    })();
  }, [bodyPartName]);

  return (
    <Stack pt="40px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "34px", xs: "20px" },
        }}
        mb="60px"
        textAlign="center"
      >
        Showing Results{" "}
        {bodyPartName.charAt(0).toUpperCase() + bodyPartName.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {bodyPartExercises.map((exercise) => (
          <Grid item xs={12} sm={6} md={3} key={exercise.id}>
            <ResultCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ExercisesResult;
