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
import EditItem from './EditItem';
import ViewSingleItem from './ViewSingleItem';
import ViewSingleUser from './ViewSingleUser';
import ViewOrder from './ViewOrder';

function AdminMukteshwari() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = "/additem" element={<AddItem/>}/>
          <Route path = "/feedback" element={<FeedbackOfCust/>}/>
          <Route path = "/viewitems" element={<ViewItem/>}/>
          <Route path = "/orderhistory" element={<OrderHistory/>}/>
          <Route path = "/viewcustomer" element={<ViewCustomer/>}/>
          <Route path = "/edititem/:id" element={<EditItem/>}/>
          <Route path = "/view-single-item/:id" element={<ViewSingleItem/>}/>
          <Route path = "/view-single-user/:id" element={<ViewSingleUser/>}/>
          <Route path = "/view-order/:id" element={<ViewOrder/>}/>
          
        </Routes>
    </>
  )
}

export default AdminMukteshwari