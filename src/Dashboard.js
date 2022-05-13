import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import {Link} from 'react-router-dom';
import {bookData} from './data';

function Dashboard() {
  return (
      <div className="container flex flex-col justify-items items-center mx-auto">
          <Navbar />
          <div className="flex justify-between">
            <LeftSidebar />
            <div className="bg-green-900 w-full">
                <div className="flex flex-col justify-items items-center mx-auto bg-amber-50 max-w-5xl mt-2 border-4 border-amber-900 rounded font-mono text-xl px-2">
                    <p className="text-center">Click on a card below for <span className="text-red-600 font-bold">🎉freebies🎉</span> and <span className="text-red-600 font-bold">🎉giveaways🎉</span> for each book.</p>
                    <p className="text-center">You will find a link to download a free bookmark and other items that go with each book.</p>
                    <p className="text-center">Everything is printable and would be great for a junk journal or book journal.</p>
                    <p className="text-center">You will also find a link to a free online book journal over there 👉.</p>
                    <p className="mt-4 text-center">If you like what you see here, please <Link to="/subscribe" target="_blank" rel="noreferrer">Subscribe</Link> to my newsletter so you can stay in the loop with future publications.</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {bookData.map((book) => (
                        <div className="m-10 max-w-xs w-1/4 border-4 rounded border-amber-900 p-2 bg-amber-50 font-mono">
                            <Link to={book.link} target="_blank">
                                <img src={book.image} alt="Book cover" className="rounded" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="mt-2">{book.title}</p>
                                    <p className="mt-1 text-sm">by {book.author}</p>
                                    <p className="mt-2">{book.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <RightSidebar />
          </div>
          
      </div>
  )
}

export default Dashboard;