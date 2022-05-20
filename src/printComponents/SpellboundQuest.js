import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function SpellboundQuest() {

    let componentRef = useRef();

  return (
    <div>
        <ReactToPrint 
            trigger={() => {
                return <button className='flex bg-gray-200 border-2 border-black rounded px-2 py-1 mb-2'>Print this out</button>
            }}
            content={() => componentRef.current}
        />
        <div ref={componentRef}>
        <style type="text/css" media="print">{"\
            @page { size: portrait; }\
            "}</style>
            <div className="quest container flex flex-col w-1/2 border-8 border-red-900 border-double rounded mt-4 mx-auto p-2 bg-orange-100">
                <p className="text-center text-3xl p-1 font-bold text-yellow-900">Find the Key</p>
                <p className='text-yellow-900'><span className='text-green-700 font-bold'>Your quest: </span>Find the key to the door of the Secret Garden.</p>
                <p className='text-yellow-900'><span className='text-green-700 font-bold'>Background: </span>The key to the door of the Secret Garden has been lost for quite some time.  Mistress Marigold was working there one day when she was attacked by a gang of  
                Glitchens while she was there gathering herbs.  She was wise enough to hide the key before they could take it from her.  But now she can&apos;t remember where she hid it.  We must get that key back so that we can increase our stronghold 
                of potions we have at the ready.</p>
                <p className='text-yellow-900'><span className='text-green-700 font-bold'>Objectives: </span>Speak with Mistress Marigold and find out what she can remember.  Use that information to search the Secret Garden and retrieve the key.</p>
                <p className='text-yellow-900'><span className='text-green-700 font-bold'>Rewards: </span>Mistress Marigold will provide 5 lessons on potion-making.  You will gather all necessary ingredients and keep the potions you craft when they 
                are completed.  You will increase your potion-crafting skill by at least two levels, depending on the difficulty of potions you craft.  You will also receive five gold as compensation.</p>
            </div>
        </div>
    </div>
  )
}

export default SpellboundQuest;