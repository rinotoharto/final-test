import React from 'react';
import './App.css';
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage , DetailPage, FavouritePage } from './pages'
import  Navigation  from './components/navigation'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation/>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/detail/:id" component={DetailPage}></Route>
          <Route path="/favourites" component={FavouritePage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
