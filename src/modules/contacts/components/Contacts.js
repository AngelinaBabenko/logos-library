import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(12),
    },
  },
  label: {
    fontWeight: 700,
  },
  value: {
    fontWeight: 500,
    wordBreak: 'break-word',
  },
}));

function Contacts() {
  const classes = useStyles();

  const contactData = [
    { label: 'Email підтримки:', value: 'support@library.com' },
    { label: 'Телефон:', value: '+38 (099) 123-45-67' },
    { label: 'Адреса:', value: 'вул. Книжкова, 12, Київ, Україна' },
    { label: 'Години роботи:', value: 'Пн–Пт: 09:00–18:00' },
  ];

  return (
    <Container>
      <Box mb={4} mt={5}>
        <Typography variant="h4" component="h1">
          Контакти
        </Typography>
      </Box>
      <Grid container spacing={2} className={classes.content}>
        {contactData.map(({ label, value }, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>{label}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography className={classes.value}>{value}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
}

export default Contacts;
