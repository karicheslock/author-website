import { useEffect } from "react";
import SeasonedWitchBookmark from "../printComponents/SeasonedWitchBookmark";
import Navbar from "../components/Navbar";

function SeasonedWitch() {
    
    useEffect(() => {
        document.title = 'The Seasoned Witch - by C.K. Brandywine'
    }, []);

  return (
    <div className='flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <Navbar />
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl py-8 px-48 mb-4 mt-2'>The Seasoned Witch Series<br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span> </p>
        
        
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SeasonedWitchBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book One:  The Seasoned Witch</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Samantha Walker just had one of the worst days of her life.  She lost her restaurant, her boyfriend and her best friend all in the same day.  But as she was digging through the rubble of her burnt out restaurant, she found something.  
                    A hidden room.  And that room held magic.  Literal magic.  She didn&apos;t know it at first, but she had stumbled on a powerful collection of magical grimoires that had been missing for ages.  Lots of people had been looking for them.  
                    And it will be up to Samantha to determine who is seeking them for good.  And who has darker motives.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/dp/B0BXHHHY67" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to find the first book in the series on Kindle Unlimited or purchase in Kindle or paperback formats.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">**Please note that the content in the novels and on Kindle Vella are the same**</p>
                </div>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2'>
                    <p className="font-mono font-bold tracking-wide text-2xl text-amber-900 mb-4">Book Two:  Witch Trials</p>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Samantha Walker's life as a witch continues in this sequel to The Seasoned Witch. Samantha is embracing her new magical life, but she still hasn't quite given up her life in the human world just yet. While she puts her new magic skills to the test, the pending trial of Astrixia, the evil witch who kidnapped her, hangs over her head. Samantha must focus on moving forward and not letting Astrixia get to her. But can she face her at trial in front of the Witch's Council? That might be difficult.</p>
                    <p className='text-amber-900 font-bold mt-4'><span className="text-2xl">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYTR2CXM" target="_blank" rel="noreferrer" className="text-green-900 hover:text-4xl">here</a> to follow this story on Kindle Vella.</span></p>
                    <p className="text-2xl text-amber-900 font-bold mt-4">Completed novel coming soon!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeasonedWitch;