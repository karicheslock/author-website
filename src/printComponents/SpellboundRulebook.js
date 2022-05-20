import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function SpellboundRulebook() {

    let componentRef = useRef();

  return (
    <div>
        <ReactToPrint 
            trigger={() => {
                return <button className='flex bg-gray-200 border-2 border-black rounded px-2 py-1 mb-2'>Print this out</button>
            }}
            content={() => componentRef.current}
        />
        <div ref={componentRef} className="m-8">
        <style type="text/css" media="print">{"\
            @page { size: portrait; }\
            "}</style>
            <div className="quest container flex flex-col border-8 border-red-900 border-double rounded mt-4 mx-auto p-2 bg-orange-100">
                <p className="text-center text-3xl p-1 font-bold text-yellow-900">Traveling Around Myst Haven</p>
                <p className='text-yellow-900 leading-7'><span className='text-green-700 font-bold'>Basics: </span>The first thing you should realize when traveling around Myst Haven is that you must always stay on a path.  Straying from a marked path 
                can have dangerous consequences.  You will notice that pathways both outdoors and indoors are marked with runic inscriptions.  This is intentional and is done for your protection.  The other basic component of travel through Myst Haven 
                are the doors and doorways.  Doors will allow you to fast travel to specific locations around Myst Haven.  But you must use them carefully.  You must open them fully and widely before stepping through.  Failure to do so can take you 
                somewhere you didn&apos;t intend to go.  You also must be mindful of the side of the door on which you stand.</p>
                <p className='text-yellow-900 mt-2 leading-7'><span className='text-green-700 font-bold'>Advanced: </span>As you progress through the game, you may acquire more convenient modes of travel including, but not limited to, broomsticks, projection 
                incantations, mountable familiars, or aerial gliders &#x28;more commonly known as wings&#x29;.</p>
                <span className='text-green-700 font-bold mt-2'>Rules: </span>
                <p className='text-yellow-900 leading-7'>1. First and foremost, you must always travel with intent when you are moving around Myst Haven.  Casual strolling is frowned upon since it can 
                put you in danger.</p>
                <p className='text-yellow-900 leading-7 mt-2'>2. Do not attempt to alter any of the runic inscriptions on any walkways, even if you think it will be beneficial.  It won&apos;t be.</p>
                <p className='text-yellow-900 leading-7 mt-2'>3. Aerial travel exempts you from the requirement to stay on a runic pathway.  However, you should still plan to stay in range of a marked path and you should always land on one.  The protection afforded by 
                the runic inscriptions extends upward in a curved pattern and can shield you as long as you stay within a reasonable radius.</p>
                <p className='text-yellow-900 leading-7 mt-2'>4.  Mountable familiars can extend the protection of the runic pathways a certain distance to the right or left of the path.  However, their magical strength is limited and must be replenished.  
                You should plan ahead before using your familiar to travel into unmarked territory.  Replenishment potions will work on familiars if they are diluted first.</p>
                <p className='text-yellow-900 leading-7 mt-2'>5.  Instantaneous travel between destinations is always possible in Myst Haven under the right circumstances.  You will become more and more capable of this as you progress through the game.  
                But like any other ability, it comes with a price.  At the very least, it will deplete your magical stamina by a specified amount, and you will need to take steps to replenish it &#x28;see the section on replenishment potions&#x29;.  You 
                may also find that you need to heal yourself and/or rest to regain your stamina.  Always be sure that your destination is not in an immediately hostile territory.</p>
            </div>
        </div>
    </div>
  )
}

export default SpellboundRulebook;