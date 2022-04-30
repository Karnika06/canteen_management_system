import Navbar from '../../components/mukteshwari/js/Navbar'
import {Route, Routes} from "react-router-dom"
import Mukteshwari from './Mukteshwari'
import MyOrders from './MyOrders'
import SendFeedback from './SendFeedback'
import UpdateProfile from './UpdateProfile'

function Customer() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Mukteshwari/>}/>
        <Route path = "/myorders" element={<MyOrders/>}/>
          <Route path = "/sendFeedback" element={<SendFeedback/>}/>
          <Route path = "/myProfile" element={<UpdateProfile/>}/>
          
        </Routes>
    </>
  )
}

export default Customer