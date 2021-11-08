// import './App.css';
import Home from './Pages/Home/Home';
import Features from './Pages/Features/Features';
import Pricing from './Pages/Pricing/Pricing';
import Stories from './Pages/Stories/Stories';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home/>}/>
      <Route  path={process.env.PUBLIC_URL + '/Features'} element={<Features/>}/>
      <Route  path={process.env.PUBLIC_URL + '/Stories'} element={<Pricing/>}/>
      <Route  path={process.env.PUBLIC_URL + '/Pricing'} element={<Stories/>}/>
      </Routes>
    </div>
  );
}

export default App;
