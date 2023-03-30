import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import {Link} from 'react-router-dom';
import {bookData} from './data';

function Dashboard() {
  return (
    <div className="container">
      <div className="flex flex-col justify-items w-screen">
          <div>
            <Navbar />
          </div>
          <div className="flex">
            <div>
              <LeftSidebar />
            </div>
            <div className="bg-green-900">
                <div className="flex flex-col justify-items items-center mx-auto bg-amber-50 w-96 lg:w-4/5 mt-2 border-4 border-amber-900 rounded font-mono text-xl px-2">
                    <p className="text-center mb-4">Welcome to the website for C. K. Brandywine!  Below you will find descriptions of all of the series I'm currently writing.</p>
                    <p className="text-center">Each series has content available on Kindle Vella and some have novels available on Kindle, Kindle Unlimited and in paperback.</p>
                    <p className="text-center mt-8 text-red-600 font-bold">**Please be aware that my novels and series of the same title contain the same content**</p>
                    <p className="text-center text-red-600">The content is released one chapter at a time on Kindle Vella and then collected into a novel for publishing on Kindle, Kindle Unlimited and in paperback formats.</p>
                    <p className="text-center mt-8">Click on a card below for a description of each series and </p><p><span className="text-red-600 font-bold">🎉free downloadable bookmarks🎉</span>.</p>
                    <p className="text-center mt-4">You will also find a link to a free online 📖 <span className="text-green-900 font-bold">Book Journal</span> 📖 over there 👉.</p>
                    <p className="mt-4 pb-4 text-center">If you like what you see here, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-2 py-1 border rounded hover:px-4 hover:py-2 hover:text-2xl">Subscribe</Link> to my newsletter so you can stay in the loop with future publications and giveaways.</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {bookData.map((book) => (
                        <div className="m-10 max-w-xs w-1/4 border-4 rounded border-amber-900 p-2 bg-amber-50 font-mono hover:w-1/2 w-fit">
                            <Link to={book.link} target="_blank">
                                <img src={book.image} alt="Book cover" className="rounded" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="mt-2 text-center">{book.title} Series</p>
                                    <p className="mt-1 text-sm">by {book.author}</p>
                                    <p className="mt-2">{book.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div>
              <RightSidebar />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;