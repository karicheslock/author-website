import {Link} from 'react-router-dom';

function Newsletters() {
  return (
    <div className='p-8 bg-green-900 h-screen font-mono'>
        <div className='border-4 rounded border-amber-900 bg-amber-50 p-4'>
            <div>Newsletters coming soon!</div>
            <p className="mt-4">In the meantime, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-2 py-1 border rounded hover:px-4 hover:py-2 hover:text-2xl">Subscribe</Link> to my newsletter so you can stay in the loop with future publications and giveaways.</p>
        </div>
    </div>
  )
}

export default Newsletters;