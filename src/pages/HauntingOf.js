import { useEffect } from "react";
import HauntingOfBookmark from "../printComponents/HauntingOfBookmark";
import Navbar from "../components/Navbar";

function HauntingOf() {
    
    useEffect(() => {
        document.title = 'The Haunting of... - by C.K. Brandywine'
    }, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-36 mb-4 mt-2'>The Haunting of... Series <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> <br /></p>
        
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <HauntingOfBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  The Haunting of Ellory May</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Ellory May was feeling pretty lucky.  She had just inherited a gorgeous house and a tidy sum of money from a great aunt that she didn&apos;t even know existed.  And the house itself was a writer&apos;s paradise.    
                    At last, she may be able to settle in and focus on her work.  But after she moves in, strange things start happening.  Doors open by themselves, objects are moved around or dropped on the floor, and phantom music sometimes plays in the hallway.  
                    And to top it all off, she&apos;s hearing voices.  Voices that tell her to do things, investigate things in the house.</p>
                    <p className='font-mono mt-4'>Can Ellory figure out what the house is trying to communicate to her?  Is there really a mystery to solve here?  Could she be in danger?  She better find out before it&apos;s too late.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4"><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4"><span className="text-2xl">Click <a href="https://www.amazon.com/dp/B0BXQ3T5F6" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to find the first book in the series on Kindle Unlimited or purchase in Kindle or paperback formats.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">**Please note that the content in the novels and on Kindle Vella are the same**</p>
                </div>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book Two:  The Haunting of Seaport Inn</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Bianca Merriweather has just started a new life as the owner of a quaint little inn along the Gulf Coast, right on the beach.  But the second she moves in, she realizes something isn&apos;t right.  Weird things are going on and she doesn&apos;t understand why.  Just how good was this offer she got for purchasing the inn anyway?  And was it really meant only for her?  Who are the strange owners who sold it to her and why did it seem like they knew her?</p>
                    <p className='font-mono mt-4'>Follow along with Bianca as she desperately tries to figure out what is going on and why things might not be exactly what they seem.</p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4"><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYXH5QSK" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HauntingOf;