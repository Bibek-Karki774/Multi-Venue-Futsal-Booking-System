import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div>
1       <h1 className='text-2xl font-bold text-green-500'> Fustal Nepal </h1>
      </div>

      <div>
    
        <Link to="/">Home</Link>
        <Link to="/venues">Venues</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      
      </div>

      <button>Dark/Light</button>
      <button>Create Account</button>
      <button> Login </button>
    </nav>
  )
}

export default NavBar
