import { createBrowserRouter } from 'react-router-dom'
import AddingRooms from './Components/AddingRooms';
import Estimate from './Components/Estimate.js';
import CustomerInputs from './Components/CustomerInputs';
import Admin from './Components/Admin';


const Router = createBrowserRouter([
    {
      path: '/',
      element: <CustomerInputs/>
    },
    {
      path: '/addingrooms/:uuid',
      element: <AddingRooms/>
    },
    {
      path: '/estimate/:uuid',
      element: <Estimate/>
    },
    {
        path: '/admin',
        element: <Admin/>
    }
  ])

  export default Router