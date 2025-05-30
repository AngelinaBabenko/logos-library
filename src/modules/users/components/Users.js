import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { map } from 'lodash';

import { getUsers } from '../redux/users.selectors';
import User from './User';

const useStyles = makeStyles({
  list: {
    maxWidth: '300px',
    margin: '0 auto',
  }
});

const Users = () => {
  const classes = useStyles();
  const users = useSelector(state => getUsers(state));

  return (
    <List className={classes.list}>
      {map(users, ({ firstname, lastname }, id) =>
        <User
          key={id}
          id={id}
          firstname={firstname}
          lastname={lastname}
        />
      )}
    </List>
  )
}

export default Users
