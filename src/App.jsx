import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </PageWrapper>
    </Router>
  );
};

export default App;
