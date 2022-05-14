import {useRef} from 'react';
import ReactToPrint from "react-to-print";
import SeasonedWitchBookmark from "../printComponents/SeasonedWitchBookmark";

function SeasonedWitch() {
    let componentRef = useRef();

  return (
    <div>
        <ReactToPrint 
            trigger={() => {
                return <button className='flex bg-gray-200 border-2 border-black mx-auto mt-10 rounded px-2 py-1'>Print this out!</button>
            }}
            content={() => componentRef.current}
        />
        <SeasonedWitchBookmark ref={componentRef} />
    </div>
  )
}

export default SeasonedWitch;