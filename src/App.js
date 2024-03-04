import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Project from './Components/Projects/Project';
import Reviews from './Components/Reviews/Reviews';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ServicesContainer from './Components/Services/ServicesContainer';
import ReviewsContainer from './Components/Reviews/ReviewsContainer';
import Login from './Components/Auth/Login/Login';

function App(props) {
  
  return (
    <BrowserRouter>
      
        <div className='App'>
          <Header/>
          <Routes>
            <Route path = "/" element = {<Main/>}/>
            <Route path = "/services" element = {<ServicesContainer />} />
            <Route path = "/projects" element = {<Project/>}/>
            <Route path = "/reviews" element = {<ReviewsContainer />}/>
            <Route path = "/login" element = {<Login />}/>
          </Routes>
          <Footer/>
        </div>
      
    
    </BrowserRouter>
    
  );
}

export default App;
