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

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/events" element={
          <Events />
        } />
        <Route path="/events/:eventID/about" element={
          <EventLanding />
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
        <Route path='/profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path='/profile/edit' element={
          <RequireAuth>
            <EditProfile />
          </RequireAuth>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
