import React from 'react'
import Navbar from '../../components/AdminMukteshwari/js/Navbar'
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Routes} from "react-router-dom"
import AddItem from './AddItem';
import FeedbackOfCust from './FeedbackOfCust';
import ViewItem from './ViewItem';
import Home from './Home';
import OrderHistory from './OrderHistory';
import ViewCustomer from './ViewCustomer';

function AdminMukteshwari() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path = "/additem" element={<AddItem/>}/>
          <Route path = "/feedback" element={<FeedbackOfCust/>}/>
          <Route path = "/viewitems" element={<ViewItem/>}/>
          <Route path = "/orderhistory" element={<OrderHistory/>}/>
          <Route path = "/viewcustomer" element={<ViewCustomer/>}/>
        </Routes>
    </>
  )
}

export default AdminMukteshwari