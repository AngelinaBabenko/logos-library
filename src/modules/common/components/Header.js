import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import Logo from 'modules/common/components/Logo';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  menu: {
    display: 'flex',
    columnGap: '16px'
  },
  active: {
    '& $button': {
      backgroundColor: '#e0e0e0',
      color: 'rgba(0, 0, 0, 0.87)',
      '&:hover': {
        backgroundColor: '#d5d5d5',
      }
    }
  },
});

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar className={classes.toolbar}>
        <Logo />

        <div className={classes.menu}>
          <NavLink exact activeClassName={classes.active} to="/home"><Button className={classes.button} variant="contained" color="primary">Головна</Button></NavLink>
          <NavLink exact activeClassName={classes.active} to="/catalog"><Button className={classes.button} variant="contained" color="primary">Каталог</Button></NavLink>
          <NavLink exact activeClassName={classes.active} to="/contacts"><Button className={classes.button} variant="contained" color="primary">Контакти</Button></NavLink>
          <NavLink exact activeClassName={classes.active} to="/login"><Button className={classes.button} variant="contained" color="primary">Вхід</Button></NavLink>
          {/* <NavLink exact activeClassName={classes.active} to="/cabinet"><Button className={classes.button} variant="contained" color="primary">Кабінет</Button></NavLink> */}
        </div>

      </Toolbar>
    </AppBar>
  )
}

export default Header