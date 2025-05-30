import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    fontSize: '32px',
    color: '#000',
    fontWeight: '600',
  }
});

const Logo = props => {
  const classes = useStyles();
  return (
    <a href='/' className={classes.logo}>
      Логос
    </a>
  )
}

export default Logo