import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppnavBar';
import Projects from './pages/Projects'

// Pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='projects' element={<Projects />} />
      </Routes>
    </Router>

  )
}

export default App;
