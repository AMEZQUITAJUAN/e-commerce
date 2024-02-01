
import {userRoutes,BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes =()=>{

  let routes= userRoutes([
  { Path:'/', element:<Home/>},
  { Path:'/my-account', element:<MyAccount/>},
  { Path:'/my-order', element:<MyOrder/>},
  { Path:'/my-orders', element:<MyOrders/>},
   { Path:'/sing-in', element:<Signin/>},
{ Path:'/*', element:<NotFound/>},

]);
return routes;
}

const App=()=> {
  return (
    <>  
      <BrowserRouter>
      <AppRoutes />
      <Navbar />
      </BrowserRouter>
      
    </>
  )
}

export default App