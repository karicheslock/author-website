import { useEffect } from "react";
import SpiritBookmark from "../printComponents/SpiritBookmark";
import Navbar from "../components/Navbar";

function Spirit() {
    
  useEffect(() => {
    document.title = 'S.P.I.R.I.T. Paranormal Investigators - by C.K. Brandywine'
}, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-24 mb-4 mt-2'>The S.P.I.R.I.T. Adventures Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SpiritBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  The S.P.I.R.I.T. Adventures</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>The San Diego Paranormal Investigators &amp; Research Initiative Team, or S.P.I.R.I.T., is a newly formed conglomerate of passionate paranormal investigators who are interested in proving once and for 
                    all that ghosts are real.  Their YouTube channel was just barely getting started with its first video showing their thorough investigation of the Whaley House, considered by many to be the most haunted house in America, when they landed 
                    their first case.</p>
                    <p className='font-mono mt-4'>A single mom and her teenage daughter are convinced that their house is haunted.  And that they are in danger.  S.P.I.R.I.T. is more than willing to step in and help.  But they quickly realize that they 
                    may have bitten off more than they can chew.  The house seems to have multiple spirits who come and go in strange patterns.  Sometimes the house is overrun with spirits who want to communicate.  But then they all disappear without a 
                    trace only to come back a short time later and start hurling objects across the room, sometimes directly at someone&apos;s face.  The pattern doesn&apos;t make sense, but the team better make sense of it if they want to help their 
                    clients.  Otherwise, their clients may never find any peace.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/dp/B0BZN626H2" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to find the first book in the series on Kindle Unlimited or purchase in Kindle or paperback formats.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">**Please note that the content in the novels and on Kindle Vella are the same**</p>
                </div>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book Two:  An Ordinary Housewife's Ghost</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>The S.P.I.R.I.T. gang is back! This time a housewife in a wealthy neighborhood has contacted them about some strange happenings in her lavish home. The gang is a little intimidated at first, but they soon come to like Mary Kay Winthrop and want to help her with the spirit that is causing chaos in her home. But as they learn more about what is going on, the story becomes more personal. It seems Mary Kay has a connection to the spirit in her home and that's why it's causing her so much trouble.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ52ZHWZ" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spirit;