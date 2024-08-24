import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import './index.css';

import Home from './components/Home/Home';
import LoginComponent from './components/Auth/LoginComponent';
import Add from './components/Add/Add';
import AddCompanyName from './components/Add/AddCompanyName';
import Admindashboard from './components/Admin/Admindashboard';
import PropTabRequest from './components/Admin/PropTabRequest';
import AddAppointmentTab from './components/Appointment/AddAppointmentTab';
import Appointmentdashboard from './components/Appointment/Appointmentdashboard';
import EditAppointmentTab from './components/Appointment/EditAppointmentTab';
import ViewAppointmentTab from './components/Appointment/ViewAppointmentTab';
import Buyerdashboard from './components/Buyer/Buyerdashboard';
import BuyTabManagement from './components/Buyer/BuyTabManagement';
import EditCompanyName from './components/Edit/EditCompanyName';
import EditFeedback from './components/Edit/EditFeedback';
import AdminManagement from './components/Seller/AdminManagement';
import AppointmentManagement from './components/Seller/AppointmentManagement';
import BuyerManagement from './components/Seller/BuyerManagement';
import SellerAllocation from './components/Seller/SellerAllocation';
import Sellerdashboard from './components/Seller/Sellerdashboard';
import SellerDashboardOverview from './components/Seller/SellerDashboardOverview';
import SellerTab from './components/Seller/SellerTab';
import ViewCompanyName from './components/View/ViewCompanyName';
import ViewFeedback from './components/View/ViewFeedback';
import ProtectedRoute from './components/Prodect/ProtectedRoute';
import Error404 from './components/Error/Error404';
import Footer from './components/Home/Footer';
import AddProperty from './components/Seller/AddProperty';
import ViewProperty from './components/Seller/ViewProperty';
import ViewAppointment from './components/Seller/ViewAppointment';
// import Register from "./Register";
// import Login from './Login';

function AppRouter() {
  return (
    <Router class="head">
      <Routes>
      <Route element={<ProtectedRoute />}>
      
      <Route path="/ViewAppointmentTab" element={<ViewAppointmentTab/>} />
      <Route path="/AddAppointmentTab" element={<AddAppointmentTab/>}/>
      <Route path="/EditAppointmentTab/:id" element={<EditAppointmentTab/>}/>
      <Route path="/Appointmentdashboard" element={<Appointmentdashboard/>}/>
      <Route path="/Sellerdashboard" element={<Sellerdashboard/>}/>
      <Route path="/Buyerdashboard" element={<Buyerdashboard/>}/>
      <Route path="/Admindashboard" element={<Admindashboard/>}/>
      <Route path="/AddProperty" element={<AddProperty/>}/>
      <Route path="/ViewProperty" element={<ViewProperty/>}/>
      <Route path="/ViewAppointment" element={<ViewAppointment/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Add" element={<Add/>}/>
      <Route path="/PropTabRequest" element={<PropTabRequest/>}/>

        <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;