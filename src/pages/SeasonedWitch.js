import {useRef} from 'react';
import ReactToPrint from "react-to-print";
import SeasonedWitchBookmark from "../printComponents/SeasonedWitchBookmark";

function SeasonedWitch() {
    let componentRef = useRef();

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900'>
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl p-8 mb-4'>The Seasoned Witch <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span></p>
        <div className='flex'>
            <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <p className='mb-8 font-mono text-amber-900 font-bold text-3xl border-2 rounded border-amber-400 p-2'>Free Bookmark!</p>
                <ReactToPrint 
                    trigger={() => {
                        return <button className='flex bg-gray-200 border-2 border-black mx-auto rounded px-2 py-1'>Print this out</button>
                    }}
                    content={() => componentRef.current}
                />
                <SeasonedWitchBookmark ref={componentRef} />
            </div>
            <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 w-3/4 h-fit'>
                <p>Synopsis</p>
            </div>
        </div>
    </div>
  )
}

export default SeasonedWitch;