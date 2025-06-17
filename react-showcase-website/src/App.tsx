import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;