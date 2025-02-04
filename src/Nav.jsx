import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='flex justify-around h-20 items-center shadow-lg txt-4xl'>
      <div>
        <h1 className='font-bold'>Mohidin Website</h1>
      </div>
     
      <ul className='flex'>
        <li className='px-4 py-2 hover:bg-green-500 hover:text-white rounded'><Link to="/">Home</Link></li>
        <li className='px-4 py-2 hover:bg-green-500 hover:text-white rounded'><Link to="/about">About</Link></li>
        <li className='px-4 py-2 hover:bg-green-500 hover:text-white rounded'><Link to="/services">Services</Link></li>
        <li className='px-4 py-2 hover:bg-green-500 hover:text-white rounded'><Link to="/contact">Contact</Link></li>
      </ul>
    
    </div>
  );
}

export default Nav;
