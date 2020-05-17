import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import { Theme } from '../types';
import AppBar from './common/AppBar';
import pages from '../pages';

const theme: Theme = {
  palette: {
    primary: {
      main: "#7bc69f"
    }
  }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar />
          <Switch>
            {
              pages.map(p => <Route key={p.path + p.label} {...p.routeProps} />)
            }
            <Route component={() => <h4>ErrorPage</h4>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
