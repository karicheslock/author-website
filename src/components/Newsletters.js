import {Link} from 'react-router-dom';
import { newsletterData } from '../data';

function Newsletters() {
  return (
    <div className='p-8 bg-green-900 h-screen font-mono text-xl'>
        <div className='border-4 rounded border-amber-900 bg-amber-50 p-4'>
            <div>Click the links below to read past issues of my newsletter!</div>
            <p className="mt-4">Also, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-2 py-1 border rounded hover:px-4 hover:py-2 hover:text-2xl">Subscribe</Link> to my newsletter so you can stay in the loop with future publications and giveaways.</p>
            <div className='flex flex-wrap'>
              {newsletterData.map((newsletter) => (
                <div key={newsletter.title} className="mt-4 border-4 border-amber-900 rounded p-4 bg-green-900 text-amber-50 w-fit font-bold text-xl tracking-wide">
                  <Link to={newsletter.link} target="_blank" rel='noreferrer'>{newsletter.title}</Link>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Newsletters;