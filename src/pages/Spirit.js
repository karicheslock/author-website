import { useEffect } from "react";
import SpiritBookmark from "../printComponents/SpiritBookmark";
import SpiritNotebook from "../printComponents/SpiritNotebook";
import SpiritPhonePic from "../printComponents/SpiritPhonePic";
import Navbar from "../components/Navbar";

function Spirit() {
    
  useEffect(() => {
    document.title = 'S.P.I.R.I.T. Paranormal Investigators - by C.K. Brandywine'
}, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-24 mb-4 mt-2'>The S.P.I.R.I.T. Adventures <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br />
        <span className="text-3xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story!</span></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SpiritBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>The San Diego Paranormal Investigators &amp; Research Initiative Team, or S.P.I.R.I.T., is a newly formed congolomerate of passionate paranormal investigators who are interested in proving once and for 
                    all that ghosts are real.  Their YouTube channel was just barely getting started with its first video showing their thorough investigation of the Whaley House, considered by many to be the most haunted house in America, when they landed 
                    their first case.</p>
                    <p className='font-mono mt-4'>A single mom and her teenage daughter are convinced that their house is haunted.  And that they are in danger.  S.P.I.R.I.T. is more than willing to step in and help.  But they quickly realize that they 
                    may have bitten off more than they can chew.  The house seems to have multiple spirits who come and go in strange patterns.  Sometimes the house is overrun with spirits who want to communicate.  But then they all disappear without a 
                    trace only to come back a short time later and start hurling objects across the room, sometimes directly at someone&apos;s face.  The pattern doesn&apos;t make sense, but the team better make sense of it if they want to help their 
                    clients.  Otherwise, their clients may never find any peace.</p>
                </div>
                <div className="flex">
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Micah&apos;s picture from Jasmine&apos;s bedroom</p>
                        <SpiritPhonePic />
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>A page from Meredith&apos;s channeling notebook</p>
                        <SpiritNotebook />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spirit;