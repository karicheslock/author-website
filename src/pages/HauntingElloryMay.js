import ElloryMayBookmark from "../printComponents/ElloryMayBookmark";
import ElloryMayFirstFloor from "../printComponents/ElloryMayFirstFloor";
import ElloryMaySecondFloor from "../printComponents/ElloryMaySecondFloor";
import ElloryMayAttic from "../printComponents/ElloryMayAttic";
import ElloryMayPoster from "../printComponents/ElloryMayPoster";

function HauntingElloryMay() {
    

  return (
    <div className='container flex flex-col px-4 pt-4 bg-green-900 items-center mx-auto'>
        <p className='text-center border-4 border-amber-900 rounded bg-amber-50 font-mono text-amber-900 font-bold text-5xl p-8 mb-4'>The Haunting of Ellory May <br /> <span className='text-3xl text-green-900'>by C.K. Brandywine</span></p>
        <div className='flex'>
             <div className='flex flex-col items-center bg-amber-50 p-4 border-4 border-amber-900 rounded w-1/4'>
                <ElloryMayBookmark />
            </div>
            <div className='flex flex-col'>
                <div className='mx-2 border-amber-900 border-4 rounded bg-amber-50 h-fit p-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1'>Synopsis</p>
                    <p className='font-mono mt-4'>Ellory May was feeling pretty lucky.  She had just inherited a gorgeous house and a tidy sum of money from a great aunt that she didn&apos;t even know existed.  And the house itself was a writer&apos;s paradise.    
                    At last, she may be able to settle in and focus on her work.  But after she moves in, strange things start happening.  Doors open by themselves, objects are moved around or dropped on the floor, and phantom music sometimes plays in the hallway.  
                    And to top it all off, she&apos;s hearing voices.  Voices that tell her to do things, investigate things in the house.</p>
                    <p className='font-mono mt-4'>Can Ellory figure out what the house is trying to communicate to her?  Is there really a mystery to solve here?  Could she be in danger?  She better find out before it&apos;s too late.</p>
                </div>
                <div className="flex">
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Ellory&apos;s hand-drawn map of the first floor of Willow&apos;s house</p>
                        <ElloryMayFirstFloor />
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Ellory&apos;s hand-drawn map of the second floor of Willow&apos;s house</p>
                        <ElloryMaySecondFloor />
                    </div>
                    <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4 w-1/3'>
                        <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>Ellory&apos;s hand-drawn map of the attic of Willow&apos;s house</p>
                        <ElloryMayAttic />
                    </div>
                </div>
                <div className='flex flex-col bg-amber-50 border-4 border-amber-900 rounded mx-2 mb-4'>
                    <p className='font-mono font-bold tracking-wide text-xl text-green-900 underline underline-offset-1 p-2'>A poster for Willow&apos;s television show Night Bites</p>
                    <ElloryMayPoster />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HauntingElloryMay;