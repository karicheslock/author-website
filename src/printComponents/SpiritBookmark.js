import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function SpiritBookmark() {

  let componentRef = useRef();

  return (
    <div>
      <ReactToPrint 
          trigger={() => {
              return <button className='flex bg-gray-200 border-2 border-black mx-auto rounded px-2 py-1'>Print this out</button>
          }}
          content={() => componentRef.current}
      />
      <div ref={componentRef}>
      <style type="text/css" media="print">{"\
            @page { size: portrait; }\
            "}</style>
          <div className='container flex items-center justify-center mt-12'>
              <div className='bookmark-spirit flex flex-col w-[175px] h-[800px] border-4 border-gray-500'>
                  <p className='bookmark-text-spirit text-amber-50 mt-auto mb-32 text-8xl whitespace-nowrap'>S.P.I.R.I.T.</p>
              </div>
          </div>
      </div>
    </div>
  )
}


export default SpiritBookmark;