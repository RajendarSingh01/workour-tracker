import React from "react";
import { Typography, Paper } from "@mui/material";

const ResultCard = (exercises) => {
  const { exercise } = exercises;

  console.log(exercise);

  return (
    <Paper style={{ height: "100%", padding: "16px", boxSizing: "border-box" }}>
      <img
        src={exercise.gifUrl}
        alt="Ex Pic"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography>Body Part: {exercise.bodyPart}</Typography>
      <Typography> Exercise Name :{exercise.name}</Typography>
      <Typography> Target Body Part: {exercise.target}</Typography>
    </Paper>
  );
};

export default ResultCard;
