/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import ProjectDetailPage from 'pages/ProjectDetailPage';
import DiscussProjectPage from 'pages/DiscussProjectPage';
import NotFoundPage from 'pages/NotFoundPage';

import 'assets/css/styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/DrawnOnwarD/" component={LandingPage} />
        <Route exact path="/DrawnOnwarD/project" component={ProjectPage} />
        <Route exact path="/DrawnOnwarD/project/:id" component={ProjectDetailPage} />
        <Route exact path="/DrawnOnwarD/discuss-project" component={DiscussProjectPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
