import {Link} from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='flex flex-col w-72 bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1'>
      <div className='mt-2'><Link to="/" target='blank' rel='noreferrer'>Home</Link></div>
      <div className='mt-2'><Link to="/about" target='blank' rel='noreferrer'>About the Author</Link></div>
      <div className='mt-2'><Link to="/contact" target='blank' rel='noreferrer'>Contact the Author</Link></div>
      <div className='mt-2'><a href="https://www.amazon.com/kindle-vella/" target='blank' rel='noreferrer'>Find me on Kindle Vella</a></div>
      <div className='mt-2'><Link to="/newsletters" target='blank' rel='noreferrer'>Read Past Newsletters</Link></div>
    </div>
  )
}

export default LeftSidebar;