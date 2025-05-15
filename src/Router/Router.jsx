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
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import EstimateForm from "../components/EstimateForm"
import AllEstimate from "../components/AllEstimate"
import ForgotPassword from "../components/ForgotPassword"
import ItemForm from "../components/ItemForm"
import AllItems from "../components/AllItems"
const router = createBrowserRouter([
  {
    path: "/",
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
      <ForgotPassword/>
      <ItemForm/>
      
     </>
      
    
    ) 
  },
  {
    path: "/dashboard", 
    element: (
      <><Sidebar />
      <Dashboard/></>
    )
  },
  {
    path:"/customer",
    element:<AllCustomer/>
  },

  {
    path:"/newCustomer",
    element:<CustomerForm/>
  },

  {
    path: "/estimate", 
    element: <AllEstimate/>,
  },

  {
    path: "/newEstimate", 
    element: <EstimateForm />,
  },
  {
    path:"/item",
    element:<AllItems/>,
  },
  {
    path: "/newItem", 
    element: <ItemForm/>,
  },

{
    path: "*", 
    element: <Notfound />,
  }
  
]);

export default router;
