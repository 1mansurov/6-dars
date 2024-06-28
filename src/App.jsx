import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About'
import Projects from './pages/projekts/Projects'
// import PageNotFound from './pages/PageNotFound';
import Address from './pages/address/Address';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projekts'element = {<Projects/>}/>
        <Route path='/address'element = {<Address/>}/>
        <Route path='/contact'element = {<Contact/>}/>
        <Route path='/resume'element = {<Resume/>}/>

      </Routes>
    </>
  )
}

export default App
