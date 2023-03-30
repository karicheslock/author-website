import { useEffect } from "react";
import Navbar from "../components/Navbar";
import FaeriesBookmark from "../printComponents/FaeriesBookmark";

function Faeries() {

    useEffect(() => {
        document.title = 'Shadow Faeries - by C.K. Brandywine'
    }, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-36 mb-4 mt-2'>Shadow Faeries Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        
        <div className='flex'>
            <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <FaeriesBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  Shadow Faeries</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Maeve Lacewing is heir to the throne in Shadowland, destined to rule over the shadow faeries. But first she must go on her Luminescence, a trip all faeries take to the human world when they come of age. It's their chance to decide if they want to stay in the human world or return to Shadowland. For Maeve, this trip is symbolic. She must return to ascend the throne. But she's not sure if that's what she wants. She only knows that it's expected of her. If only she could live in both worlds.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZGLCVZ4" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faeries