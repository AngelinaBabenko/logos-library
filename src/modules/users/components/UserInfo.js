import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { useSelector } from 'react-redux';

import { getUser } from '../redux/users.selectors';
import UserInfoField from './UserInfoField';

const useStyles = makeStyles({
  collapse: {
    alignSelf: 'flex-start',
    fontSize: '12px',
  }
});

const UserInfo = ({ open = false, id }) => {
  const classes = useStyles();
  const {
    firstname,
    lastname,
    email,
    address,
    phone,
  } = useSelector(state => getUser(state, id));

  return (
    <Collapse className={classes.collapse} in={open}>
      <UserInfoField value={firstname} label='Firstname' />
      <UserInfoField value={lastname} label='Lastname' />
      <UserInfoField value={email} label='Email' />
      <UserInfoField value={address} label='Address' />
      <UserInfoField value={phone} label='Phone' />
    </Collapse>
  )
}

UserInfo.propTypes = {
  open: PropTypes.bool,
  id: PropTypes.string.isRequired,
}

export default UserInfo;
