import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import UserInfo from './UserInfo';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainInfo: {
    display: 'flex',
    width: '100%',
  },
});

const User = ({ firstname, lastname, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = useCallback(
    () => {
      setOpen(!open);
    },
    [open],
  );

  return (
    <ListItem className={classes.item} onClick={handleClick}>
      <div className={classes.mainInfo}>
        <ListItemText primary={`${firstname} ${lastname}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <UserInfo open={open} id={id} />
    </ListItem>
  )
}

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default User;
