import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
});

const UserInfoField = ({ value = '', label }) => {
  const classes = useStyles();

  if (!value) return null;

  return (
    <p>
      <span className={classes.label}>{`${label}:`}</span>
      {value}
    </p>
  )
}

UserInfoField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default UserInfoField
