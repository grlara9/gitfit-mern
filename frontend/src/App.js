import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register' 
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Navigation from './components/Navigation'
import Alerts from './components/Alert';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/alertState';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="container">
            <Navigation />
              <Alerts />
              <Routes>
                  <Route path='/' element={<Register />}     />
                  <Route path='/login' element={<Login />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/exercise' element={<Exercises />} />
              </Routes>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
