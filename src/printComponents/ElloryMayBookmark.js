import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function ElloryMayBookmark() {

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
              <div className='bookmark-ellory flex flex-col w-[175px] h-[800px] border-4 border-gray-500'>
                  <p className='bookmark-text-ellory text-amber-50 mt-auto mb-28 text-5xl whitespace-nowrap'>The Haunting of Ellory May</p>
              </div>
          </div>
      </div>
    </div>
  )
}


export default ElloryMayBookmark;