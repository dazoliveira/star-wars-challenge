import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Welcome from '../features/welcome/Welcome';
import JediVsDarkseid from '../features/jediVsDarkseid/JediVsDarkseid';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/jedi-vs-darkside" exact component={JediVsDarkseid} />
    </Switch>
  );
};

export default Routes;
