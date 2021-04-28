import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NavTabs from './components/NavTabs'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavTabs></NavTabs>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Portfolio" component={Portfolio}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      {/* Relative footers now so we put them on the pages */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
