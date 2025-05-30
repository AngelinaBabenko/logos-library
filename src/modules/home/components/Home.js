import React from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(10, 0),
    textAlign: 'center',
  },
  subtitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  heroButtons: {
    marginTop: theme.spacing(5),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
          Онлайн-бібліотека Логос
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Ваша особиста цифрова бібліотека — зручно, швидко та безкоштовно. Досліджуйте тисячі книжок, 
          авторів та жанрів, зберігайте улюблені твори, або просто почніть читати з будь-якого пристрою.
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Приєднуйтесь до нашої спільноти книголюбів уже сьогодні!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link to="/login">
                <Button variant="contained" color="primary" size="large">
                  Ввійти
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/registration">
                <Button variant="outlined" color="primary" size="large">
                  Зареєструватися
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Home;
