import {Link} from 'react-router-dom';

function RightSidebar() {
  return (
    <div className='flex flex-col bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1 w-fit'>
      <div className='mt-4 mb-4'><a href="https://mern-reading-journal-app-kari.herokuapp.com/" target="_blank" rel="noreferrer" className='border-2 border-amber-600 rounded px-2 py-1 hover:px-4 hover:py-2 text-green-900 font-bold whitespace-nowrap'>Free Book Journal</a></div>
      <div className="mt-2"><Link to="/subscribe" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-2 py-1 border rounded hover:px-4 hover:py-2 hover:text-xl">Subscribe</Link> to my newsletter!</div>
    </div>
  )
}

export default RightSidebar;