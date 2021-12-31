import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TourCard = () => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://www.repstatic.it/content/nazionale/img/2019/04/30/122347865-a082d2c3-07ca-4ed1-9584-0f0ade64cc79.jpg?webp"
          alt=""
        />

        <Box px={2}>
          <Typography variant="subtitle1" component="h2">
            Tour Title
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
