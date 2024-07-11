import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
