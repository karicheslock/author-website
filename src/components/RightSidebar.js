import {Link} from 'react-router-dom';

function RightSidebar() {
  return (
    <div className='flex flex-col w-72 bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1'>
      <div className='mt-2'><a href="https://mern-reading-journal-app-kari.herokuapp.com/" target="_blank" rel="noreferrer">Free Book Journal</a></div>
      <div className="mt-2"><Link to="/subscribe" target="_blank" rel="noreferrer">Subscribe</Link> to my newsletter!</div>
    </div>
  )
}

export default RightSidebar;