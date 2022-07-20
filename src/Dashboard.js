import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import {Link} from 'react-router-dom';
import {bookData} from './data';

function Dashboard() {
  return (
      <div className="container flex flex-col justify-items items-center mx-auto w-full min-w-750">
          <Navbar />
          <div className="flex justify-between w-full">
            <LeftSidebar />
            <div className="bg-green-900 w-full">
                <div className="flex flex-col justify-items items-center mx-auto bg-amber-50 max-w-5xl mt-2 border-4 border-amber-900 rounded font-mono text-xl px-2">
                    <p className="text-center mb-4">Welcome to the website for C. K. Brandywine!  Below you will find descriptions of my serialized stories currently available on Kindle Vella.</p>
                    <p className="text-center">Click on a card below for <span className="text-red-600 font-bold">🎉freebies🎉</span> and <span className="text-red-600 font-bold">🎉giveaways🎉</span> for each book.</p>
                    <p className="text-center mt-4">You will find a link to download a free bookmark and other items that go with each story.  Some items correspond to details in each story, but don&apos;t worry.</p>
                    <p className="mb-4">They won&apos;t spoil anything 😉.</p>
                    <p className="text-center">Everything is printable and would be great for a junk journal or book journal.</p>
                    <p className="text-center mt-4">You will also find a link to a free online 📖 <span className="text-green-900 font-bold">Book Journal</span> 📖 over there 👉.</p>
                    <p className="mt-4 text-center">If you like what you see here, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-2 py-1 border rounded hover:px-4 hover:py-2 hover:text-2xl">Subscribe</Link> to my newsletter so you can stay in the loop with future publications and giveaways.</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {bookData.map((book) => (
                        <div className="m-10 max-w-xs w-1/4 border-4 rounded border-amber-900 p-2 bg-amber-50 font-mono hover:w-1/2 w-fit">
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