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
            <div className="menu container flex flex-col border-4 border-slate-700 border-double bg-amber-50 mt-4 w-11/12 mx-auto p-1">
                <p className="text-center text-3xl p-1">Concoction</p>
                <div className='flex justify-between'>
                    <div className='flex flex-col px-2'>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4'>Appetizers</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Hummus, olives, pepperoncinis, feta</p>
                            <p>9</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Served with pita</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Heirloom tomato medley, peaches, basil oil, burrata</p>
                            <p>12</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Served with sourdough crostini</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Truffle fries</p>
                            <p>10</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan, fresh rosemary, housemade ketchup</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Honey &amp; Soy Glazed Meatballs</p>
                            <p>11</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Jicama and carrot slaw</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>🌶️Jumbo Shrimp🌶️</p>
                            <p>15</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-8'>Sriracha romesco, pickled chilis, peppered bacon crumble</p>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4'>Soups &amp; Salads</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Tomato Basil bisque</p>
                            <p>12</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan tuiles</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>She Crab soup</p>
                            <p>17</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Sourdough oyster crackers</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Apple &amp; Ale soup</p>
                            <p>13</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Cheddar stuffed soft pretzel bites</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Little gems, walnuts, figs</p>
                            <p>10</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Parmesan tuiles, lemon vinaigrette</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Butter lettuce stack, thick cut heirloom tomato, peppered bacon</p>
                            <p>14</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Dijon vinaigrette, sourdough crostini</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Grilled romaine, white anchovies, castelvetrano olives</p>
                            <p>13</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Housemade Caesar, garlic croutons</p>
                        <div className='flex justify-between'>
                            <p className='mr-1'>Iceberg wedge, cherry tomatoes, blue cheese crumbles, pickled red onions</p>
                            <p>9</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Housemade peppered bacon avocado ranch</p>
                    </div>
                    <div className='mr-2'>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4'>Entrees</p>
                        <div className='flex justify-between'>
                            <p>Garlic and herb airline chicken</p>
                            <p>27</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Parsnip mash, crispy Brussels sprouts, honey dijon drizzle</p>
                        <div className='flex justify-between'>
                            <p>Chicken drumstricks two ways</p>
                            <p>23</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Sage &amp; rosemary breading, lemon fennel dry rub, roasted okra, potato &amp; onion haystack</p>
                        <div className='flex justify-between'>
                            <p>30-day Dry aged bone-in ribeye, 18 oz.</p>
                            <p>65</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Rosemary parmesan potato stack, balsamic glazed pearl onions</p>
                        <div className='flex justify-between'>
                            <p>Giant meatball</p>
                            <p>32</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Mozzarella filling, slow simmered marinara, fresh basil, garlic bread</p>
                        <div className='flex justify-between'>
                            <p>Bone-in pork chop, 16 oz.</p>
                            <p>35</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Apple fennel slaw, edamame succotash, onion strings</p>
                        <div className='flex justify-between'>
                            <p>Seared ahi tuna, 8 oz.</p>
                            <p>30</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Wasabi aioli, pickled vegetables, sizzled ginger rice</p>
                        <div className='flex justify-between'>
                            <p>Jumbo shrimp &amp; grits</p>
                            <p>38</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Andouille sausage, smoked gouda, grilled ramps</p>
                        <div className='flex justify-between'>
                            <p>Yellow curry with mixed vegetables</p>
                            <p>22</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Zucchini, carrots, baby corn, potato, sizzled ginger rice</p>
                        <div className='flex justify-between'>
                            <p>Mixed wild mushroom risotto</p>
                            <p>27</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-8'>Four cheese garlic focaccia, roasted whole tomato, truffle oil</p>
                        <p className='text-xl font-bold tracking-wide p-1 mb-4 ml-4'>Desserts</p>
                        <div className='flex justify-between'>
                            <p>Creme Brulee</p>
                            <p>12</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Fresh berries, mint, vanilla sugar</p>
                        <div className='flex justify-between'>
                            <p>Flourless chocolate lava cake</p>
                            <p>13</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Whipped cream, salted caramel drizzle</p>
                        <div className='flex justify-between'>
                            <p>Chef&apos;s choice select cheeses</p>
                            <p>22</p>
                        </div>
                        <p className='text-xs pl-4 italic mb-2'>Local honey, fig preserves, candied walnuts, seeded crackers</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
    
  )
}

export default SeasonedWitchSampleMenu;