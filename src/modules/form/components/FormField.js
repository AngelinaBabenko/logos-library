import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';

import { setField } from '../redux/form.actions';
import { getFieldValue } from '../redux/form.selectors';

const FormField = ({ label, name, required = false }) => {
  const dispatch = useDispatch();

  const value = useSelector(state => getFieldValue(state, name));
  const onChangeHandler = useCallback(
    e => {
      dispatch(setField({ name, value: e.target.value }))
    },
    [dispatch, name],
  )

  return (
    <TextField
      required={required}
      label={label}
      name={name}
      onChange={onChangeHandler}
      value={value}
    />
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

export default FormField
