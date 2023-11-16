import React from "react";
import SearchExercises from "../components/SearchExercises";
import BodyPartsSlider from "../components/BodyPartsSlider";
import { Container } from "@mui/material";
import ExercisesResult from "../components/ExercisesResult";
import { useSelector } from "react-redux";

const Exercises = () => {
  const { bodyPartName } = useSelector((state) => state.selectedBodyPart);
  return (
    <>
      <Container>
        <SearchExercises />
        <BodyPartsSlider />
        {bodyPartName !== "" && <ExercisesResult />}
      </Container>
    </>
  );
};

export default Exercises;
