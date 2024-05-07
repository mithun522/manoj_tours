import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Bookings from './components/Bookings/Bookings';
import NewBookingPreview from './components/Bookings/NewBookingPreview';
import NewBookings from './components/Bookings/NewBookings';
import PaymentDetails from './components/Bookings/PaymentDetails';
import Calender from './components/Calendar/Calendar';
import DashBoard from './components/Dashboard/Dashboard';
import DashboardBookings from './components/Dashboard/DashboardBookings';
import EditBookings from './components/Dashboard/EditBookings';
import Fleets from './components/Dashboard/Fleets';
import Enquiries from './components/Enquiries/Enquiries';
import Login from './components/Login';
import CompaniesNewQuotation from './components/Quotes/CompaniesNewQuotation';
import CompanyNewQuotationPreview from './components/Quotes/CompanyNewQuotationPreview';
import CustomerNewQuotation from './components/Quotes/CustomerNewQuotation';
import CustomerNewQuotationPreview from './components/Quotes/CustomerNewQuotationPreview';
import Quotes from './components/Quotes/Quotes';
import AddDriver from './components/Settings/AddDriver';
import AddFleets from './components/Settings/AddFleets';
import DriversInformation from './components/Settings/DriversInformation';
import EditDriverInformation from './components/Settings/EditDriverInformation';
import EditFleet from './components/Settings/EditFleet';
import FleetsInformation from './components/Settings/FleetsInformation';
import ShareLinks from './components/ShareLinks/ShareLinks';
import ShareLinksInfo from './components/ShareLinks/ShareLinksInfo';
import Bill from './components/Bookings/Bill';

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
          <Route path='/bookings/bill' element={<Bill />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path='/quotes/customer-new-quotations' element={<CustomerNewQuotation />} />
          <Route path='/quotes/company-new-quotations' element={<CompaniesNewQuotation />} />
          <Route path='/quotes/customer-new-quotation-preview' element={<CustomerNewQuotationPreview />} />
          <Route path= '/quotes/company-new-quotation-preview' element={<CompanyNewQuotationPreview />} />
          <Route path= '/enquiries' element={<Enquiries />} />
          <Route path='/share-links/edit' element={<ShareLinksInfo />} />
          <Route path='/share-links' element={<ShareLinks />} />
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
