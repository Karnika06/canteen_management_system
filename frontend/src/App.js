
import './App.css';
import Landing from './pages/landingPage/Landing';
import ViewportProvider from "./viewport";
import AwesomeSlider from 'react-awesome-slider';
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Routes} from "react-router-dom"
import AboutUs from './pages/landingPage/AboutUs/AboutUs'
import ContactUs from './pages/landingPage/ContactUs/ContactUs'
import Register from './pages/landingPage/LogInRegister/Register';
import Login from './pages/landingPage/LogInRegister/Login';
import Mukteshwari from './pages/Customer/Mukteshwari';

import AdminMukteshwari from './pages/Admin/AdminMukteshwari';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Customer from './pages/Customer/Customer';


function App() {
  return (
    <>
    <ViewportProvider>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/mukteshwari/*" element={<Customer/>}/>
          <Route path = "/admin/*" element={<AdminMukteshwari/>}/>
          
        </Routes>
    </Router>
    </ViewportProvider>
      </>
  );
}

export default App;
