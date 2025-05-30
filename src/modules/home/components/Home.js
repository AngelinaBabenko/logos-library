import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Онлайн-бібліотека
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Логос
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link to="/login">
                <Button variant="contained" color="primary">Ввійдіть</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/registration">
                <Button variant="outlined" color="primary">Зареєструйтесь</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Home;
