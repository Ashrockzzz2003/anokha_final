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

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/events/:eventID/about" element={
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
        <Route path='/register/verifyOtp' element={
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
        <Route path='/profile/edit' element={
          <RequireAuth>
            <>
              <EditProfile />
            </>
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
