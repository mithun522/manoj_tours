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
import NewQuotations from './components/Quotes/NewQuotation';
import CustomerQuotations from './components/Quotes/CustomerQuotations';
import CompaniesQuotations from './components/Quotes/CompaniesQuotations';
import CustomerNewQuotationPreview from './components/Quotes/CustomerNewQuotationPreview';
import CompanyNewQuotationPreview from './components/Quotes/CompanyNewQuotationPreview';
import Enquiries from './components/Enquiries/Enquiries';
import ShareLinks from './components/ShareLinks/ShareLinks';
import Settings from './components/Settings/Settings';
import FleetsInformation from './components/Settings/FleetsInformation';
import EditFleet from './components/Settings/EditFleet';
import DriversInformation from './components/Settings/DriversInformation';
import EditDriverInformation from './components/Settings/EditDriverInformation';

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
          <Route path='/quotes/new-quotations' element={<NewQuotations />} />
          <Route path='/quotes/customer-quotations' element={<CustomerQuotations />} />
          <Route path='/quotes/companies-quotations' element={<CompaniesQuotations />} />
          <Route path='/quotes/customer-new-quotation-preview' element={<CustomerNewQuotationPreview />} />
          <Route path= '/quotes/company-new-quotation-preview' element={<CompanyNewQuotationPreview />} />
          <Route path= '/enquiries' element={<Enquiries />} />
          <Route path='/share-links' element={<ShareLinks />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/settings/fleets-information' element={<FleetsInformation />} />
          <Route path='/settings/edit-fleet' element={<EditFleet />} />
          <Route path='/settings/drivers-information' element={<DriversInformation />} />
          <Route path='/settings/edit-driver' element={<EditDriverInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
