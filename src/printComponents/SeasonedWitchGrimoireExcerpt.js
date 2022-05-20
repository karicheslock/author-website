import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function SeasonedWitchGrimoireExcerpt() {

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
            @page { size: landscape; }\
            "}</style>
            <div className="excerpt container flex flex-col border-4 border-slate-700 border-double mt-4 w-1/2 mx-auto p-2 items-center bg-gray-50 underline underline-offset-2 decoration-red-300 decoration-wavy">
                <p className="text-center text-3xl p-1 font-bold">Health Concoxion</p>
                <div className='flex justify-between'>
                    <div className='text-xl tracking-wide font-bold p-2'>
                        <p>Une brash lavendre</p>
                        <p>Dui spriges rose-marie</p>
                        <p>Fiste of garlique</p>
                        <p>Lasher of aloe</p>
                    </div>
                    <div className='text-xl tracking-wide font-bold p-2'>
                        <p>Dried pomegranit berries</p>
                        <p>Palme of poppi seedes</p>
                        <p>2L watre from the clearest rivre</p>
                        <p className='pl-4'>on the sunnyest day</p>
                    </div>                    
                </div>
                <div className='text-xl tracking-wide font-bold p-2 mt-8'>
                    <p>1. Add lavendre, rose-marie, and garlique to pestel and grinde exactly nine times clocke-wise with mortare to form a thicke paste.</p>
                    <p>2. Add aloe and grinde nine times counter-clocke-wise.</p>
                    <p>3. Add pomegranit berries and poppi seeds and grind nine times clocke-wise.</p>
                    <p>4. Scrape finale mixture into a sparkling cleane cauldron.</p>
                    <p>5. Add freshly collected rivre watre.</p>
                    <p>6. Boile rapidemente, stirring firste nine times counter-clocke-wise and then nine times clocke-wise.</p>
                    <p>!!Alaways Finishe Withe Clocke-Wise!!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeasonedWitchGrimoireExcerpt