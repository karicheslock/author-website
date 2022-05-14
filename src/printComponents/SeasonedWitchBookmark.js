import React from 'react';


const SeasonedWitchBookmark = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <div className='container flex items-center justify-center mt-12'>
            <div className='bookmark flex flex-col w-[175px] h-[800px] border-4 border-gray-500'>
                <p className='bookmark-text text-amber-50 mt-auto mb-28 text-7xl whitespace-nowrap'>The Seasoned Witch</p>
            </div>
        </div>
    </div>
  )
});

export default SeasonedWitchBookmark;