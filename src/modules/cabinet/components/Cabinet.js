import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PageTitle from 'modules/common/components/PageTitle';

const useStyles = makeStyles({
  contianer: {}
});

function Cabinet() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PageTitle>Кабінет</PageTitle>
    </div>
  );
}

export default Cabinet;
