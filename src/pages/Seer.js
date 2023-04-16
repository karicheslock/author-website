import { useEffect } from "react";
import SeerBookmark from "../printComponents/SeerBookmark";
import Navbar from "../components/Navbar";

function Seer() {
    
  useEffect(() => {
    document.title = 'The Seer - by C.K. Brandywine'
}, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-48 mb-4 mt-2'>The Seer Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SeerBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                  <p className="font-mono font-bold tracking-wide text-xl text-amber-900 mb-4">Book One:  The Seer</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Layla Henderson&apos;s life changed very suddenly one day.  One second she was on top of the world, and the next she was recovering from a coma after a car accident.  She had some people to help her along 
                    with her recovery, though.  A couple of kind spirits who had passed on but still wandered the wards of the hospital.  Layla hadn&apos;t always been able to see dead people, but it seems her accident opened her up to a whole new world 
                    to her, a world where the veil between life and death had been pushed aside.</p>
                    <p className='font-mono mt-4'>And as it turns out, the two spirits in the hospital aren&apos;t the only spirits she can see.  One night, Layla bumps into a police officer who had brought a little girl to the hospital.  The girl 
                    didn&apos;t make it, and Layla soon saw her spirit playing near the officer, as if she had no one else to cling to after she left this world.  Layla becomes determined to find out what happened to her.  No matter the cost.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4">Click <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4"><span className="text-2xl">Click <a href="https://www.amazon.com/dp/B0BXJRHM2D" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to find the first book in the series on Kindle Unlimited or purchase in Kindle or paperback formats.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">**Please note that the content in the novels and on Kindle Vella are the same**</p>
                </div>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                  <p className="font-mono font-bold tracking-wide text-xl text-amber-900 mb-4">Book Two:  What She Saw</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Layla&apos;s adventures seeing dead people continue in this series. This time her best friend Caitlin is getting married and Layla is helping her plan the wedding. But while she is taking pictures of the venue, she notices a strange figure in one of them. It was a woman who had been murdered at that location and needed Layla's help to figure out what happened to her. Layla is happy to help and so is her police officer boyfriend Patrick. They'll just have to solve the case without ruining the wedding.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYY7QD6R" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seer;