import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home';
import { Route } from "react-router-dom";
import CountryDetail from './components/home/countriesContainer/country/countryDetail/countryDetail';
import Nav from './components/nav/nav'

function App() {
  return (
    <div>
    <Route exact path={'/'}>
      <LandingPage/>
    </Route>
    <Route path={'/home'}>
      <Nav/>
    </Route>
    <Route exact path={'/home'}>
      <Home/>
    </Route>
    <Route path={'/home/:id'}>
      <CountryDetail/>
    </Route>
  </div>
  );
}

export default App;
