export const endpoints = {
  bodyParts: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  bodyPartsExercises: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/",
};

export const HEADERS = {
  "X-RapidAPI-Key": process.env.REACT_APP_EXERCISES_RAPID_API_KEY,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};
