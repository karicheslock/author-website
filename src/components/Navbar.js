import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function Navbar() {
  return (
    <div className="flex h-24 items-center justify-center bg-green-900 font-mono border-8 border-amber-900 w-screen sm:w-728px">
      <div className='flex'>
        <p className="mx-auto text-center underline underline-offset-8 decoration-amber-900 decoration-double decoration-4 text-amber-50 font-bold tracking-wide text-3xl">The Works of C.K. Brandywine</p>
        <div className='mr-4 flex flex-col w-max ml-36'>
            <p className='text-amber-50 mb-1'>Follow me</p>
            <div className='flex justify-between'>
                <a href="https://www.facebook.com/CKBrandywine" className="text-amber-50" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/ckbrandywine" className="text-amber-50" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://www.twitter.com/ckbrandywine1" className="text-amber-50" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;