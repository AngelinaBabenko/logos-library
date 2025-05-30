import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PageTitle from 'modules/common/components/PageTitle';

const useStyles = makeStyles({
  contianer: {},
  content: {
    display: 'inline-grid',
    gridTemplateColumns: '180px 300px',
    marginTop: '40px',
    marginLeft: '100px',

    '& span': {
      fontWeight: '500',
      '&:nth-child(odd)': {
        fontWeight: '700',
      }
    }
  }
});

function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PageTitle>Контакти</PageTitle>
      <div className={classes.content}>
        <span>Email підтримки:</span>
        <span>support@library.com</span>
        <span>Телефон:</span>
        <span>+38 (099) 123-45-67</span>
        <span>Адреса:</span>
        <span>вул. Книжкова, 12, Київ, Україна</span>
        <span>Години роботи:</span>
        <span>Пн–Пт: 09:00–18:00</span>
      </div>
    </div>
  );
}

export default Contacts;
