import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Project from './Components/Projects/Project';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ServicesContainer from './Components/Services/ServicesContainer';
import ReviewsContainer from './Components/Reviews/ReviewsContainer';
import HouseDescriptionContainer from './Components/Services/ServiceHouse/HouseDescription/HouseDescriptionContainer';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import ProfileContainer from './Components/Profile/ProfileContainer';


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
            <Route path="/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Registration/>}/>
            <Route path= "/houseDescription/:id" element = {<HouseDescriptionContainer/>}/>
            <Route path='/profile' element = {<ProfileContainer/>}/>
          </Routes>
          <Footer/>
        </div>
      
    
    </BrowserRouter>
    
  );
}

export default App;
