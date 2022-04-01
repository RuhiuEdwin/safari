import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Basket from './Components/Laundrybasket';
import Services from './Components/Services'
import Order from './Components/Order'
import Checkout from './Components/Checkout'
import Blog from './Components/Blog';
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
          <Route path='/laundrybasket' element={<Basket/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/safarirepeat' element={<SafariRepeat/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </div>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
