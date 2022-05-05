import Navbar from '../../components/mukteshwari/js/Navbar'
import {Route, Routes} from "react-router-dom"
import Mukteshwari from './Mukteshwari'
import MyOrders from './MyOrders'
import SendFeedback from './SendFeedback'
import UpdateProfile from './UpdateProfile'
import OrderNow from './OrderNow'
import ViewMyOrders from './ViewMyOrders'

function Customer() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Mukteshwari/>}/>
        <Route path = "/myorders" element={<MyOrders/>}/>
          <Route path = "/sendFeedback" element={<SendFeedback/>}/>
          <Route path = "/myProfile" element={<UpdateProfile/>}/>
          
          <Route path = "/ordernow" element={<OrderNow/>}/>
          <Route path = "/view-order/:id" element={<ViewMyOrders/>}/>
        </Routes>
    </>
  )
}

export default Customer