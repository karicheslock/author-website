import {Link} from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='flex lg:w-max flex-col bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1 h-full'>
      <div className='mt-4'><Link to="/" target='blank' rel='noreferrer'>Home</Link></div>
      <div className='mt-4'><Link to="/about" target='blank' rel='noreferrer'>About the Author</Link></div>
      <div className='mt-4'><Link to="/contact" target='blank' rel='noreferrer'>Contact the Author</Link></div>
      <div className='mt-4'><a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target='blank' rel='noreferrer'>Find me on Kindle Vella</a></div>
      <div className='mt-4'><Link to="/newsletters" target='blank' rel='noreferrer'>Read Past Newsletters</Link></div>
    </div>
  )
}

export default LeftSidebar;