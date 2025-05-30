import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'modules/common/components/Logo';

const useStyles = makeStyles((theme) => ({
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
  button: {},

  drawerList: {
    width: 250,
    paddingTop: theme.spacing(2),
  },
}));

const navItems = [
  { path: '/home', label: 'Головна' },
  { path: '/catalog', label: 'Каталог' },
  { path: '/contacts', label: 'Контакти' },
  { path: '/login', label: 'Вхід' },
  // { path: '/cabinet', label: 'Кабінет' },
];

const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const clickSound = useRef(new Audio(`${process.env.PUBLIC_URL}/sounds/click.mp3`));

  const playClickSound = () => {
    // Ensure it plays from the start on rapid clicks
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    playClickSound();
  };

  const handleMenuClick = () => {
    playClickSound();
  };

  const drawer = (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            exact
            to={item.path}
            activeClassName={classes.active}
            style={{ textDecoration: 'none' }}
            onClick={handleMenuClick}
          >
            <ListItem button>
              <ListItemText primary={item.label} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" color="default">
      <Toolbar className={classes.toolbar}>
        <Logo />

        {/* Desktop Menu */}
        <Hidden smDown>
          <div className={classes.menu}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                exact
                to={item.path}
                activeClassName={classes.active}
                onClick={handleMenuClick}
              >
                <Button className={classes.button} variant="contained" color="primary">
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </div>
        </Hidden>

        {/* Mobile Menu Icon */}
        <Hidden mdUp>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
