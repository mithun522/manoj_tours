import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/Dashboard/Dashboard';
import EditBookings from './components/Dashboard/EditBookings';
import DashboardBookings from './components/Dashboard/DashboardBookings';
import Fleets from './components/Dashboard/Fleets';
import Bookings from './components/Bookings/Bookings';
import NewBookings from './components/Bookings/NewBookings';
import PaymentDetails from './components/Bookings/PaymentDetails';
import NewBookingPreview from './components/Bookings/NewBookingPreview';
import Quotes from './components/Quotes/Quotes';
import CustomerNewQuotationPreview from './components/Quotes/CustomerNewQuotationPreview';
import CompanyNewQuotationPreview from './components/Quotes/CompanyNewQuotationPreview';
import Enquiries from './components/Enquiries/Enquiries';
import FleetsInformation from './components/Settings/FleetsInformation';
import EditFleet from './components/Settings/EditFleet';
import DriversInformation from './components/Settings/DriversInformation';
import EditDriverInformation from './components/Settings/EditDriverInformation';
import AddFleets from './components/Settings/AddFleets';
import CustomerNewQuotation from './components/Quotes/CustomerNewQuotation';
import CompaniesNewQuotation from './components/Quotes/CompaniesNewQuotation';
import AddDriver from './components/Settings/AddDriver';
import Calender from './components/Calendar/Calendar';
import ShareLinksInfo from './components/ShareLinks/ShareLinksInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/bookings" element={<DashboardBookings />} />
          <Route path="/dashboard/edit-bookings" element={<EditBookings />} />
          <Route path="/dashboard/fleets" element={<Fleets />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/new-bookings" element={<NewBookings />} />
          <Route path='/bookings/payment-details' element={<PaymentDetails />} />
          <Route path="/bookings/new-booking-preview" element={<NewBookingPreview />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path='/quotes/customer-new-quotations' element={<CustomerNewQuotation />} />
          <Route path='/quotes/company-new-quotations' element={<CompaniesNewQuotation />} />
          <Route path='/quotes/customer-new-quotation-preview' element={<CustomerNewQuotationPreview />} />
          <Route path= '/quotes/company-new-quotation-preview' element={<CompanyNewQuotationPreview />} />
          <Route path= '/enquiries' element={<Enquiries />} />
          <Route path='/share-links' element={<ShareLinksInfo />} />
          <Route path='/settings/fleets-information' element={<FleetsInformation />} />
          <Route path='/settings/edit-fleet' element={<EditFleet />} />
          <Route path='/settings/add-fleets' element={<AddFleets />} />
          <Route path='/settings/drivers-information' element={<DriversInformation />} />
          <Route path='/settings/edit-driver' element={<EditDriverInformation />} />
          <Route path='/settings/add-driver' element={<AddDriver />} />
          <Route path='/calender' element={<Calender />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
