import React from "react";
import { Box, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch } from "react-redux";
import { changeBodyPart } from "../features/selectBodyPartSlice";

const BodyPartCard = ({ name }) => {
  const dispatch = useDispatch();

  const handleBodyPartClick = () => {
    // if(oldState !=== name) {
    dispatch(changeBodyPart(name));
    // }
  };

  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={handleBodyPartClick}
    >
      <Box
        border="2px solid red"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
          userSelect: "none",
        }}
      >
        <FitnessCenterIcon />
        <Typography variant="h6">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
      </Box>
    </div>
  );
};

export default BodyPartCard;
