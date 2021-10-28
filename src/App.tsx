import JediVsDarkseid from 'features/jediVsDarkseid/JediVsDarkseid';
import Welcome from 'features/welcome/Welcome';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/welcome" exact component={Welcome} />
      <Route path="/jedi-vs-darkside" exact component={JediVsDarkseid} />
    </Switch>
  );
};

export default App;
