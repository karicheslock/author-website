import { useEffect } from "react";
import Navbar from "../components/Navbar";
import WordsmithBookmark from "../printComponents/WordsmithBookmark";

function Wordsmith() {

    useEffect(() => {
        document.title = 'The Wordsmith - by C.K. Brandywine'
    }, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-36 mb-4 mt-2'>The Wordsmith Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        
        <div className='flex'>
            <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <WordsmithBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  The Wordsmith</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Allie spends her days with her nose stuck in a book, much to her mother's dismay. But then one day she decides to try her hand at writing her own stories using an antique journal and pen set that her mother bought at a flea market. There's something strange about this journal and pen set though. It seems that anything she writes with them comes to life. And now Allie has the opportunity to live out every bookworm's dream by immersing herself in a fantasy novel. Time to write the perfect story.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZMV3RZW" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wordsmith