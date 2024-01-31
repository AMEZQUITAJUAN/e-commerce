
import {userRoutes,BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'

const AppRoutes =()=>{

  let routes= userRoutes([
  {
  Path:'/',
  element:<Home/>
}
]);
return routes;
}

const App=()=> {
  return (
    <>  
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App