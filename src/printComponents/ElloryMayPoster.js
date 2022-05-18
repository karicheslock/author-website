import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function ElloryMayPoster() {

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
            @page { size: landscape; }\
            "}</style>
          <div className='poster container flex flex-col items-center justify-center m-4 border-4 border-red-500 rounded w-3/4 mx-auto bg-slate-900'>
              <p className='text-red-500 text-9xl'>NIGHT BITES</p>
              <p className='text-red-500 text-5xl'>Starring Willow White</p>
              <div className='flex'>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
                <div class="tear"></div>
              </div>
              <img src='../images/vampire-bite.jpg' alt='A vampire bite on a neck' className='w-1/2 rounded mt-4 mb-4' />
              <p className='text-red-500 text-xl'>Premiering this fall on your favorite television channel</p>
           </div>
      </div>
    </div>
  )
}


export default ElloryMayPoster;