import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LycanBookmark from "../printComponents/LycanBookmark";

function LycanSaga() {

    useEffect(() => {
        document.title = 'The Lycan Saga - by C.K. Brandywine'
    }, []);

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-36 mb-4 mt-2'>The Lycan Saga <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br />
        <span className="text-3xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story!</span></p>
        <div className='flex'>
            <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <LycanBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>The Montoro Clan is the oldest werewolf clan in the United States, residing at the southern end of the Appalachian Trail high in the mountains. Through the generations, they have maintained their distance from the humans, only dealing the occasional looky-loos or casually curious parties. The humans fear them and reject them for being different and so stay away from them as a matter of principle. But then a young human girl goes missing. And the shapeshifting beasts become the obvious suspects.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LycanSaga