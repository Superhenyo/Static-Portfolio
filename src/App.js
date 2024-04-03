import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppnavBar';



// Pages
import Home from './pages/Home';

// import About from './pages/About';
// import Projects from './pages/Projects'

function App() {

  return (

    <Router>
      <AppNavbar />
      <Routes>
        <Route path='/' element={< Home />} />
        {/* <Route path='projects' element={<Projects />} /> */}
        {/* <Route path='about' element={<About />} /> */}
      </Routes>
    </Router>

  )
}

export default App;
