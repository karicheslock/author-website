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
        <div ref={componentRef}>
        <style type="text/css" media="print">{"\
            @page { size: portrait; }\
            "}</style>
            <div className="quest container flex flex-col border-8 border-red-900 border-double rounded mt-4 mx-auto p-2 bg-orange-100">
                <p className="text-center text-3xl p-1 font-bold text-yellow-900">Traveling Around Myst Haven</p>
                <p className='text-yellow-900'><span className='text-green-700 font-bold'>Basics: </span></p>
                
            </div>
        </div>
    </div>
  )
}

export default SpellboundRulebook;