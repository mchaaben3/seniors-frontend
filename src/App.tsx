import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { userConnected } from './utils/userConnected';

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const token = localStorage.getItem('token')
  if (token) {
    Promise.all([userConnected()]).then((values) => {
      setCurrentUser(values[0]);
    });
  }
  return (

    <BrowserRouter>
      {/* {token && <Navigation />} */}
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path='/profile/:name' element={<Profile currentUser={currentUser} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
