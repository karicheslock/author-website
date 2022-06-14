import { useEffect } from "react";
import SpellboundBookmark from "../printComponents/SpellboundBookmark";
import SpellboundQuest from "../printComponents/SpellboundQuest";
import SpellboundRulebook from "../printComponents/SpellboundRulebook";
import Navbar from "../components/Navbar";
import {Adsense} from '@ctrl/react-adsense';

function Spellbound() {

  useEffect(() => {
    document.title = 'Spellbound: Tales of Myst Haven - by C.K. Brandywine'
}, []);

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
      <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-24 mb-4 mt-2'>Spellbound: Tales of Myst Haven <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br />
        <span className="text-3xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story!</span></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SpellboundBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>A magical land is in need of help.  The ruling class had survived the most recent war, but just barely.  Their numbers were greatly depleted, leaving them scant resources to manage their every day lives and return 
                    to the once propsperous society they had been.  But then they came up with a plan.  They could tap into the resources in the human world and bring them over to help.</p>
                    <p className='font-mono mt-4'>Willow Lansbury was the owner and proprietor of a quaint little bookshop in San Diego, California.  She was an avid reader, mostly fantasy novels, and an enthusiastic gamer, mostly tabletop RPGs.  She 
                    also proudly collected rare books to show off in a secret room in the back of her bookstore.  One day a strange man came be to bring her some rare books he had for sale.  But one book was more than rare.  It transported Willow to 
                    Myst Haven.</p>
                    <p className="font-mono mt-4">Willow quickly learns that this land has created a game for her, a game like her tapletop RPGs that she loved so much.  But the stakes are much higher here.  And she must play along if she wants to return home.</p>
                </div>
                <div className="flex">
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/2 p-2'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>A page from the Spellbound Rulebook</p>
                      <SpellboundRulebook />  
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/2 p-2'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>An example quest, as dictated by Queen Maribel</p>
                        <SpellboundQuest />
                    </div>
                </div>
            </div>
        </div>
        <Adsense
            client='ca-pub-7831705014229923'
            slot='2895656225'
        />
    </div>
  )
}

export default Spellbound;