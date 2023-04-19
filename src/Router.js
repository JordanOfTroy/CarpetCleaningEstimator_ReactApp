import { createBrowserRouter } from 'react-router-dom'
import AddingRooms from './Components/AddingRooms';
import Estimate from './Components/Estimate.js';
import CustomerInputs from './Components/CustomerInputs';


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
    }
  ])

  export default Router