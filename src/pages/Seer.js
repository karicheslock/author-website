import SeerBookmark from "../printComponents/SeerBookmark";

function Seer() {
    

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl p-8 mb-4'>The Seer <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <SeerBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'></p>
                    <p className='font-mono mt-4'></p>
                </div>
                <div className="flex">
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>One of Cindy&apos;s drawings</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seer;