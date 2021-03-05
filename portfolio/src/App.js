import './App.css';
//link to the main control file
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NavTabs from './components/NavTabs'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTabs></NavTabs>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/about" component={Portfolio}></Route>
          <Route exact path="/about" component={Contact}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
