import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home';
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Route exact path={'/'}>
      <LandingPage/>
    </Route>
    <Route path={'/home'}>
      <Home/>
    </Route>
  </div>
  );
}

export default App;
