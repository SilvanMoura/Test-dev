import { Routes, Route } from 'react-router-dom';
import Home from './pages/screenHome';
import Login from './pages/screenLogin';
import Register from './pages/screenRegister';
import User from './pages/screenUser';

export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
    
  );
}