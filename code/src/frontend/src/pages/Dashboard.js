import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Typography variant="h3" component="div" gutterBottom>
          Data Management Process Designer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Scientific data management is usually guided by a data lifecycle.
          Nowadays, many funding agencies ask or require data management plans.
          Research centers and data repositories also adopt some sort of a
          lifecycle. Many of the current data lifecycles suffer from the
          constraints they impose on their practitioners
        </Typography>
      </Grid>
    </Grid>
  );
}
