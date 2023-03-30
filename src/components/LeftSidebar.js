import {Link} from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='flex lg:w-max flex-col bg-amber-50 h-auto border-l-8 border-r-8 border-solid border-amber-900 font-mono pl-1 pr-1 h-full'>
      <div className='mt-4'><Link to="/" target='blank' rel='noreferrer'>Home</Link></div>
      <div className='mt-4'><Link to="/about" target='blank' rel='noreferrer'>About the Author</Link></div>
      <div className='mt-4'><Link to="/contact" target='blank' rel='noreferrer'>Contact the Author</Link></div>
      <div className='mt-4'><a href="https://www.amazon.com/s?k=C.+K.+Brandywine&i=digital-text&rh=n%3A154606011%2Cp_n_feature_nineteen_browse-bin%3A9045887011&dc&ds=v1%3AK7ljtQER6foPQ9ZPa9%2Bkj92kJyJ2u98EuZYO5NiB6Qc&crid=3OWO87FFGTRJ5&qid=1680125471&rnid=9045886011&sprefix=c.+k.+brandywine%2Cdigital-text%2C129&ref=sr_nr_p_n_feature_nineteen_browse-bin_1" target='blank' rel='noreferrer'>Find my books on Kindle or paperback</a></div>
      <div className='mt-4'><a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target='blank' rel='noreferrer'>Find my series on Kindle Vella</a></div>
      <div className='mt-4'><a href="https://www.amazon.com/author/ckbrandywine" target='blank' rel='noreferrer'>Follow my author page on Amazon</a></div>
      <div className='mt-4'><Link to="/newsletters" target='blank' rel='noreferrer'>Read Past Newsletters</Link></div>
      <div className='mt-4'><a href="https://www.techradar.com/news/amazon-kindle-vella?fbclid=IwAR0ZRcm2ANBayElMsGywIvNeA7JDUpd649RMx1ednKryaQdvSL5JG7v-zlY" target='blank' rel='noreferrer'>Learn how Kindle Vella works</a></div>
    </div>
  )
}

export default LeftSidebar;