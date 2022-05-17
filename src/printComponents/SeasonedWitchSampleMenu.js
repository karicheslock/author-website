import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function SeasonedWitchSampleMenu() {

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
            <div className="menu container flex flex-col border-4 border-slate-700 border-double bg-amber-50 mt-4 w-11/12 mx-auto">
                <p className="text-center text-3xl p-1">Craft &amp; Brew</p>
                <div className='flex'>
                    <div className='flex flex-col px-2'>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4'>Appetizers</p>
                        <p>Hummus, olives, pepperoncinis, feta</p>
                        <p className='text-xs pl-4 italic mb-2'>Served with pita</p>
                        <p>Heirloom tomato medley, peaches, basil oil, burrata</p>
                        <p className='text-xs pl-4 italic mb-2'>Served with sourdough crostini</p>
                        <p>Truffle fries</p>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan, fresh rosemary, housemade ketchup</p>
                        <p>Honey &amp; Soy Glazed Meatballs</p>
                        <p className='text-xs pl-4 italic mb-2'>Jicama and carrot slaw</p>
                        <p>🌶️Jumbo Shrimp🌶️</p>
                        <p className='text-xs pl-4 italic mb-8'>Sriracha romesco, pickled chilis, bacon crumble</p>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4'>Soups &amp; Salads</p>
                        <p>Tomato Basil bisque</p>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan tuiles</p>
                        <p>She Crab soup</p>
                        <p className='text-xs pl-4 italic mb-2'>Sourdough oyster crackers</p>
                        <p>Apple &amp; Ale soup</p>
                        <p className='text-xs pl-4 italic mb-2'>Cheddar stuffed soft pretzel bites</p>
                        <p>Little gems, walnuts, figs</p>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan tuiles, lemon vinaigrette</p>
                        <p>Butter lettuce stack, thick cut heirloom tomato, peppered bacon</p>
                        <p className='text-xs pl-4 italic mb-2'>Dijon vinaigrette, sourdough crostini</p>
                        <p>Grilled romaine, white anchovies, castelvetrano olives</p>
                        <p className='text-xs pl-4 italic mb-2'>Housemade Caesar, garlic croutons</p>
                        <p>Iceberg wedge, cherry tomatoes, blue cheese crumbles, pickled red onions</p>
                        <p className='text-xs pl-4 italic mb-2'>Housemade bacon avocado ranch</p>
                    </div>
                    <div>
                    <p className='text-xl font-bold tracking-wide p-1 mb-4 ml-4'>Entrees</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
    
  )
}

export default SeasonedWitchSampleMenu;