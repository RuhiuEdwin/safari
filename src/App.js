import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import SafariRepeat from './Components/SafariRepeat';



function App() {
  return (
    
    <div className='wrapper'>
      <Router>
          <Header />
      <div className='bg'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/safarirepeat' element={<SafariRepeat/>} />
        </Routes>
      </div>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
