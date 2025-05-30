import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PageTitle from 'modules/common/components/PageTitle';

import { books } from './books'

const useStyles = makeStyles((theme) => ({
  contianer: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Catalog() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PageTitle>Каталог</PageTitle>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {books.map((book) => (
            <Grid item key={book.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={book.img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="h2" color="primary">
                    {book.author}
                  </Typography>
                  <Typography>
                    {book.description.slice(0, 200)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Детально
                  </Button>
                  <Button size="small" color="primary">
                    Додати
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Catalog;
