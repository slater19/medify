import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './Search/Search';
import App from './App';
import Home from './Home/Home';
import Bookings from './Bookings/Bookings';


import { createTheme, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<App/>,
      children: [
        {
        path: "search",
        element:<Search/>,
        },
        {
          path: "my-bookings",
          element:<Bookings/>,
        },
        {
            path: "/",
            element:<Home/>,
            },
      ],
    },
  ],
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <RouterProvider router={router} />
  </React.StrictMode>
);

const theme = createTheme({
  palette: {
    primary: {
      main:"#2AA7FF",
      green:"#00A500", 
      secondary:"#1B3C74" 
    
    }}})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
