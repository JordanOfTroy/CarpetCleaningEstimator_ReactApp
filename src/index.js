import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './index.css';
import App from './App';
import AddingRooms from './Components/AddingRooms';
import Estimate from './Components/Estimate.js';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
