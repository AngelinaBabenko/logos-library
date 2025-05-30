import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '26px',
    fontWeight: '500',
    paddingLeft: '100px',
    marginTop: '60px',
  }
});

const PageTitle = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>{children}</div>
  )
}

export default PageTitle