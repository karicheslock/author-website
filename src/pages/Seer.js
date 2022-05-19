import { useEffect } from "react";
import SeerBookmark from "../printComponents/SeerBookmark";
import Navbar from "../components/Navbar";

function Seer() {
    
  useEffect(() => {
    document.title = 'The Seer - by C.K. Brandywine'
}, []);

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-48 mb-4 mt-2'>The Seer <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SeerBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Layla Henderson&apos;s life changed very suddenly one day.  One second she was on top of the world, and the next she was recovering from a coma after a car accident.  She had some people to help her along 
                    with her recovery, though.  A couple of kind spirits who had passed on but still wandered the wards of the hospital.  Layla hadn&apos;t always been able to see dead people, but it seems her accident opened her up to a whole new world 
                    to her, a world where the veil between life and death had been pushed aside.</p>
                    <p className='font-mono mt-4'>And as it turns out, the two spirits in the hospital aren&apos;t the only spirits she can see.  One night, Layla bumps into a police officer who had brought a little girl to the hospital.  The girl 
                    didn&apos;t make it, and Layla soon saw her spirit playing near the officer, as if she had no one else to cling to after she left this world.  Layla becomes determined to find out what happened to her.  No matter the cost.</p>
                </div>
                <div className="flex">
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seer;