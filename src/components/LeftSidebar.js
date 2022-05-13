import {Link} from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='flex flex-col w-72 bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1'>
      <div className='mt-2'><Link to="/">Home</Link></div>
      <div className='mt-2'><Link to="/about">About the Author</Link></div>
      <div className='mt-2'><Link to="/contact">Contact the Author</Link></div>
      <div className='mt-2'><Link to="/kindle-vella">Find me on Kindle Vella</Link></div>
      <div className='mt-2'><Link to="/newsletters">Read Past Newsletters</Link></div>
    </div>
  )
}

export default LeftSidebar;