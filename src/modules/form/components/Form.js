import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import { addUser } from 'modules/users/redux/users.actions';
import { getForm, getSaveDisabledState } from '../redux/form.selectors';
import { resetForm } from '../redux/form.actions';
import formSchema from '../config/formSchema';
import FormField from './FormField';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    marginTop: '30px',
    maxWidth: '300px',
    padding: '0 10px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '10px',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
});

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const newUser = useSelector(state => getForm(state));
  const disabled = useSelector(state => getSaveDisabledState(state));

  const handleReset = useCallback(
    () => {
      dispatch(resetForm());
    },
    [dispatch],
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addUser(newUser));
      handleReset();
    },
    [dispatch, handleReset, newUser],
  );

  return (
    <div className={classes.root}>
      <div className={classes.title}>Add user</div>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {formSchema.map(({ name, label, required }) =>
          <FormField
            required={required}
            label={label}
            name={name}
            key={name}
          />
        )}
        <div className={classes.controls}>
          <Button
            variant="contained"
            color="primary"
            disabled={disabled}
            type="submit">
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  ) 
}

export default Form