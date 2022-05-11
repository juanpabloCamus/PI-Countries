
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home';
import { Route } from "react-router-dom";
import CountryDetail from './components/home/countriesContainer/country/countryDetail/countryDetail';
import ActForm from './components/activityForm/activityForm';

function App() {
  return (
    <div>
    <Route exact path={'/'}>
      <LandingPage className='s'/>
    </Route>
    <Route exact path={'/home'}>
      <Home/>
    </Route>
    <Route exact path={'/home/:id'}>
      <CountryDetail/>
    </Route>
    <Route exact path={'/addActivity'}>
      <ActForm/>
    </Route>
  </div>
  );
}

export default App;
