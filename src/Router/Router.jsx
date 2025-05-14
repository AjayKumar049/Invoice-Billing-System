// Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Login from "../components/Login"; 
import Notfound from "../components/Notfound";
import Footer from "../components/Footer";
import CustomerForm from "../components/CustomerForm";
import AllCustomer from "../components/AllCustomer";
const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/Login",
    element:(
      <><Login/>
      <CustomerForm/>
      <AllCustomer/></>
    
    ) 
  },
  

{
    path: "*", 
    element: <Notfound />,
  }
  
]);

export default router;
