import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'modules/common/components/Header';
import Home from 'modules/home/components/Home';
import Contacts from 'modules/contacts/components/Contacts';
import Login from 'modules/login/components/Login';
import Restore from 'modules/restore/components/Restore';
import Registration from 'modules/registration/components/Registration';
import Catalog from 'modules/catalog/components/Catalog';
import Cabinet from 'modules/cabinet/components/Cabinet';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '64px'
  }
});

function App() {
  const classes = useStyles();
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/contacts"><Contacts /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/registration"><Registration /></Route>
          <Route path="/restore"><Restore /></Route>
          <Route path="/catalog"><Catalog /></Route>
          <Route path="/cabinet"><Cabinet /></Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
