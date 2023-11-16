import React from 'react';
import { Box, Grid, Paper, Typography, Rating } from '@mui/material';
import ReviewData from '../Data/ReviewsData.json';

const Reviews = () => {
  const revs = ReviewData.rev;

  return (
    <Box flexGrow={1} padding={2} marginBottom={10}>
      <Grid container spacing={2}>
        {revs.map(data => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Paper elevation={3} className="review-paper">
              <img src={data.img} alt="profile Pic" className="profile-img" />
              <Typography variant="h6">{data.name}</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {data.review}
              </Typography>
              <Rating name="read-only" value={data.stars} precision={0.5} readOnly />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
