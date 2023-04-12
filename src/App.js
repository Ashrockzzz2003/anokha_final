import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Events from './components/Events';
import EventLanding from './components/events/EventLanding';
import Login from './components/user/Login';
import Profile from './components/Profile';
import RequireAuth from './auth/RequireAuth';
import EditProfile from './components/user/EditProfile';
import NoAuth from './auth/NoAuth';
import Register from './components/user/Register';
import Footer from './components/Footer';
import VerifyOTP from './components/user/VerifyOTP';
import ConfirmPaymentPage from './components/user/ConfirmPaymentPage.jsx';
import { useAuth } from './auth/useAuth';
import { PaymentStatus } from './components/user/PaymentStatus';
import { useEffect } from 'react';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ChangePassword';
import AmritaPassport from './components/events/AmritaPassport';

function App() {

  const { fetchEvents } = useAuth();

  useEffect(() => {
    window.addEventListener("load", () => {
      fetchEvents();
    })
  }, [fetchEvents])

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/amritaPassport' element={
          <>
            <RequireAuth>
              <NavigationBar />
              <AmritaPassport />
              <Footer />
            </RequireAuth>
          </>
        }
        />

        <Route path="/" element={
          <>
            <NavigationBar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/events" element={
          <>
            <NavigationBar />
            <Events />
            <Footer />
          </>
        } />
        <Route path="/events/:eventId/about" element={
          <>
            <NavigationBar />
            <EventLanding />
            <Footer />
          </>
        } />
        <Route path='/login' element={
          <NoAuth>
            <Login />
          </NoAuth>
        } />
        <Route path='/register' element={
          <NoAuth>
            <Register />
          </NoAuth>
        } />
        <Route path='/verifyOtp/:token' element={
          <NoAuth>
            <VerifyOTP />
          </NoAuth>
        } />
        <Route path='/profile' element={
          <RequireAuth>
            <>
              <NavigationBar />
              <Profile />
              <Footer />
            </>
          </RequireAuth>
        } />
        <Route path="/events/:eventId/confirmPayment/:isPassport" element={
          <RequireAuth>
            <ConfirmPaymentPage />
          </RequireAuth>
        } />
        <Route path="/payment/:statusId" element={
          <PaymentStatus />
        } />
        <Route path="/success" render={() => {
          window.location.href = "/payment/1"
          return null;
        }} />
        <Route path="/fail" render={() => {
          window.location.href = "/payment/0"
          return null;
        }} />
        <Route path='/profile/edit' element={
          <RequireAuth>
            <>
              <EditProfile />
            </>
          </RequireAuth>
        } />
        <Route path='/forgotpassword' element={
          <NoAuth>
            <ForgotPassword />
          </NoAuth>
        } />
        <Route path='/resetPassword' element={
          <NoAuth>
            <ResetPassword />
          </NoAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
