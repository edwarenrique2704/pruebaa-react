
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import{Route,Routes} from 'react-router-dom';
import {Header} from "./components/Header";
import{HomePage}from "./pages/HomePage";
import{Movies} from './pages/Movies';
import{Series} from './pages/Series';

export const App = ()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series />}/>
      </Route>
    </Routes>
    
    </>
  )
}