import { useEffect } from "react";
import SeasonedWitchBookmark from "../printComponents/SeasonedWitchBookmark";
import SeasonedWitchSampleMenu from '../printComponents/SeasonedWitchSampleMenu';
import SeasonedWitchGrimoireExcerpt from "../printComponents/SeasonedWitchGrimoireExcerpt";
import Navbar from "../components/Navbar";
import {Adsense} from '@ctrl/react-adsense';

function SeasonedWitch() {
    
    useEffect(() => {
        document.title = 'The Seasoned Witch - by C.K. Brandywine'
    }, []);

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-48 mb-4 mt-2'>The Seasoned Witch <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br />
        <span className="text-3xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story!</span></p>
        
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SeasonedWitchBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Samantha Walker just had one of the worst days of her life.  She lost her restaurant, her boyfriend and her best friend all in the same day.  But as she was digging through the rubble of her burnt out restaurant, she found something.  
                    A hidden room.  And that room held magic.  Literal magic.  She didn&apos;t know it at first, but she had stumbled on a powerful collection of magical grimoires that had been missing for ages.  Lots of people had been looking for them.  
                    And it will be up to Samantha to determine who is seeking them for good.  And who has darker motives.</p>
                    <p className='font-mono mt-4'>Follow Samantha on her magical journey as she learns to harness her innate magical abilities.  The same abilities that made her a natural chef and led to her owning an award-winning restaurant.  If she can balance the magical world with 
                    her every day life, she may just come up with an epically powerful combination - a restaurant of deliciously magical proportions.</p>
                </div>
                <div className='flex flex-col bg-amber-50 p-4 border-4 border-amber-900 rounded mx-2 mt-2'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Sample Menu from Samantha&apos;s Restaurant, Concoction</p>
                    <SeasonedWitchSampleMenu />
                </div>
                <div className='flex flex-col bg-amber-50 p-4 border-4 border-amber-900 rounded mx-2 mt-2'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Excerpt from Millicent Willoughby&apos;s Grimoire</p>
                    <SeasonedWitchGrimoireExcerpt />
                </div>
            </div>
        </div>
        <Adsense
            client='ca-pub-7831705014229923'
            slot='4798207906'
        />
    </div>
  )
}

export default SeasonedWitch;