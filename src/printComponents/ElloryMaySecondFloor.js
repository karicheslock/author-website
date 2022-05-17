import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function ElloryMaySecondFloor() {

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
          <div className='container flex items-center justify-center mt-1'>
              <img src='../images/ellory-may-second-floor.jpg' alt='A drawing of the rooms in a house' />
          </div>
      </div>
    </div>
  )
}


export default ElloryMaySecondFloor;