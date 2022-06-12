import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register' 
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
            <Route path='/' element={<Register />}     />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/exercise' element={<Exercises />} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
