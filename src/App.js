import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <nav className="flex  sm:justify-center space-x-4">
      <Link to="/" className="px-1 py-1 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"><img src="./logo.png" class="h-48 mr-12" alt="comrades Logo" /></Link>
      <Link to="/" className="px-3 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">Home</Link>
      <Link to="/about" className="rounded-lg px-3 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">About</Link>
      <Link  to="/menu" className="rounded-lg px-3 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">Menu</Link>
      <Link  to="/login" className="rounded-lg px-3 py-16 text-slate-700 font-medium hover:text-blue-600 active:text-red-600 focus:text-red-300">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </Router> 
  )
}

export default App;
