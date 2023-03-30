import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function FaeriesBookmark() {

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
              <div className='bookmark-faeries flex flex-col w-[175px] h-[800px] border-4 border-gray-500'>
                  <p className='bookmark-text-faeries text-amber-50 mt-auto mb-28 text-8xl whitespace-nowrap'>Shadow Faeries</p>
              </div>
          </div>
      </div>
    </div>
  )
}


export default FaeriesBookmark;