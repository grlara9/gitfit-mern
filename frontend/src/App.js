import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register' 
import Login from './pages/Login'
import Data from './pages/Dashboard';
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
            <Route path='/' element={<Register />}     />
           
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
