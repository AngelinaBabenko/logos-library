import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Box,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { books } from './books';

const useStyles = makeStyles((theme) => ({
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    width: 400,
    outline: 'none',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
    borderRadius: 4,
  },
}));

function Catalog() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBook(null);
  };

  return (
    <Container>
      <Box mb={4} mt={5}>
        <Typography variant="h4" component="h1">
          Каталог
        </Typography>
      </Box>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {books.map((book) => (
            <Grid item key={book.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={book.img}
                  title={book.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" color="primary">
                    {book.author}
                  </Typography>
                  <Typography>
                    {book.description.slice(0, 200)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOpen(book)}>
                    Детально
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for Detailed Info */}
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 300 }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            {selectedBook && (
              <>
                <img src={selectedBook.img} alt={selectedBook.title} className={classes.modalImage} />
                <Typography variant="h6" gutterBottom>{selectedBook.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {selectedBook.author}
                </Typography>
                <Typography variant="body2">{selectedBook.description}</Typography>
                <Box mt={3} textAlign="right">
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Закрити
                  </Button>
                </Box>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </Container>
  );
}

export default Catalog;
