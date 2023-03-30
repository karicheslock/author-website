import { useEffect } from "react";
import SpellboundBookmark from "../printComponents/SpellboundBookmark";
import Navbar from "../components/Navbar";

function Spellbound() {

  useEffect(() => {
    document.title = 'Spellbound: Tales of Myst Haven - by C.K. Brandywine'
}, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-24 mb-4 mt-2'>Spellbound: Tales of Myst Haven Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SpellboundBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  Spellbound: Tales of Myst Haven</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>A magical land is in need of help.  The ruling class had survived the most recent war, but just barely.  Their numbers were greatly depleted, leaving them scant resources to manage their every day lives and return 
                    to the once propsperous society they had been.  But then they came up with a plan.  They could tap into the resources in the human world and bring them over to help.</p>
                    <p className='font-mono mt-4'>Willow Lansbury was the owner and proprietor of a quaint little bookshop in San Diego, California.  She was an avid reader, mostly fantasy novels, and an enthusiastic gamer, mostly tabletop RPGs.  She 
                    also proudly collected rare books to show off in a secret room in the back of her bookstore.  One day a strange man came be to bring her some rare books he had for sale.  But one book was more than rare.  It transported Willow to 
                    Myst Haven.</p>
                    <p className="font-mono mt-4">Willow quickly learns that this land has created a game for her, a game like her tapletop RPGs that she loved so much.  But the stakes are much higher here.  And she must play along if she wants to return home.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/dp/B0BXPQFFHJ" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to find the first book in the series on Kindle Unlimited or purchase in Kindle or paperback formats.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">**Please note that the content in the novels and on Kindle Vella are the same**</p>
                </div>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book Two:  Inherited Magic</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Willow Lansbury is now quite comfortable traveling back and forth between her home in San Diego and her new home in Myst Haven among the Magusterials. She has spent a lot of time getting to know her biological mother, Wilhelmina Daisyfield, and she is learning magic from her on a regular basis. She is even planning to teach a class on fighting wisps at Havenwood Academy. But something isn't right when she starts to teach the class. Can she figure out exactly what is amiss before it's too late?</p>
                    <p className='font-mono mt-4'>Willow Lansbury was the owner and proprietor of a quaint little bookshop in San Diego, California.  She was an avid reader, mostly fantasy novels, and an enthusiastic gamer, mostly tabletop RPGs.  She 
                    also proudly collected rare books to show off in a secret room in the back of her bookstore.  One day a strange man came be to bring her some rare books he had for sale.  But one book was more than rare.  It transported Willow to 
                    Myst Haven.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ2XVKM9" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spellbound;