import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

function Newsletter11() {
  return (
    <div className='p-8 bg-green-900 h-full font-mono text-xl'>
        <div className="w-4/5 mx-auto">
            <div className="flex items-center border-4 border-amber-900 bg-amber-50 p-4 mb-4">
                <div className="flex items-center">
                    <img src="../favicon.jpg" alt="The logo of C.K. Brandywine Publishing" className="w-1/5 md:w-1/12 rounded-full mr-4"></img>
                    <p className="text-amber-900 font-bold text-xl md:text-3xl">C.K. Brandywine Publishing Newsletter</p>
                </div>
                <div className='mr-4 flex flex-col whitespace-nowrap'>
                    <p className='text-amber-900 mb-2'>Follow me</p>
                    <div className='flex'>
                        <a href="https://www.facebook.com/CKBrandywine" className="text-amber-900 mx-4" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ckbrandywine" className="text-amber-900" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-4 border-amber-900 bg-amber-50 p-4">
                <p className="mb-5 text-2xl text-red-800 font-bold">Hello Happy Readers!</p>
                <p className="mb-4 leading-7">
                    Welcome to the eleventh edition of the newsletter for C.K. Brandywine Publishing.
                </p>
                <p className="mb-4 leading-7"> 
                    I am pleased to announce that five of my books are on <span className="text-red-600 font-bold text-2xl">sale for a limited time</span>!!  Get them for as little as <span className="text-red-600 font-bold text-2xl">$0.99</span> but you have to act fast!  The price will be going up each day until they get back to their full price of $4.99.  Grab them today!!  Sale items are highlighted below.
                </p>
                <p className="mb-4 mt-4 leading-7"> 
                   I am also pleased to announce that my series <span className="text-red-600 font-bold text-2xl">The Lycan Saga is now complete</span> on Kindle Vella and has been compiled into a novel now for sale on Amazon.  Click <a href="https://www.amazon.com/dp/B0C3DLGYJV" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.
                </p>
                <p className="mb-4 mt-4 leading-7">👉👉Please click <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to find me on Kindle Vella, if you haven&apos;t already.👈👈</p>
                <p className="mb-4 mt-4 leading-7">👉👉Please click <a href="https://www.amazon.com/s?k=C.+K.+Brandywine&i=digital-text&rh=n%3A154606011%2Cp_n_feature_nineteen_browse-bin%3A9045887011&dc&ds=v1%3AK7ljtQER6foPQ9ZPa9%2Bkj92kJyJ2u98EuZYO5NiB6Qc&crid=3OWO87FFGTRJ5&qid=1680125471&rnid=9045886011&sprefix=c.+k.+brandywine%2Cdigital-text%2C129&ref=sr_nr_p_n_feature_nineteen_browse-bin_1" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to find my novels on Kindle Unlimited or available for purchase in Kindle and paperback formats.👈👈</p>
                <p className="mb-4 mt-4 leading-7">Also, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">💌subscribe💌</Link> to this newsletter so I can keep you up to date on all the latest things I&apos;m working on.</p>
                <p className="mb-4 mt-4 leading-7">
                    And don&apos;t forget to stop by my <a href="https://www.ckbrandywine.com/" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">website</a>.  You will find descriptions of all of my series there as well as a free printable bookmark for each.  There is also a link to a free online book journal for you to use as you wish.  I plan to continuously 
                    add more content and freebies to my website so please check back often.
                </p>
                <p className="mb-4 mt-4 leading-7">Please follow me on social media to keep up with all things Brandywine.  The links are up there 👆.</p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Writing</p>
                <p className="mb-4 mt-4 leading-7">I now have 9 series available on Kindle Vella!!  I&apos;m so excited to finally have all of the series started that I wish to write.  Each series will have at least one new episode added each week, hopefully more.  Then, 
                as each story comes to a conclusion, I will collect the episodes and publish them as a completed novel.  Then the next story in the series will begin.  As of right now, I have five completed novels available on Kindle Unlimited and in Kindle and paperback formats.  Please 
                visit my <a href="https://www.ckbrandywine.com/" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">website</a> for more information.</p>
                <p className="mb-4 mt-4 leading-7">These novels are available as completed series on Kindle Vella as well along with the next story in the series.  Descriptions of each series are listed below as well as links to all of the content.  Please enjoy!</p>
                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The Seasoned Witch Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The Seasoned Witch</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Samantha Walker had everything going for her. Until the day her restaurant burned down and she caught her boyfriend cheating on her with her best friend. But all was not lost. In the rubble of her burned down restaurant she found a hidden room. And that room contained magic. Samantha had stumbled on the long lost grimoires of Millicent Willoughby, a powerful witch who had been presumed dead for quite some time. Many people were looking for those grimoires. And now they were looking for Samantha.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7"><span className="text-2xl text-red-600">💵💵ON SALE FOR A LIMITED TIME!!💵💵</span>Click <a href="https://www.amazon.com/dp/B0BXHHHY67" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: Witch Trials</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Samantha Walker's life as a witch continues in this sequel to The Seasoned Witch. Samantha is embracing her new magical life, but she still hasn't quite given up her life in the human world just yet. While she puts her new magic skills to the test, the pending trial of Astrixia, the evil witch who kidnapped her, hangs over her head. Samantha must focus on moving forward and not letting Astrixia get to her. But can she face her at trial in front of the Witch's Council? That might be difficult.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYTR2CXM" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>
                
                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The Haunting Of... Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The Haunting of Ellory May</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Ellory May was living a simple life until she found out she had a great aunt. Wisteria White, Ellory's grandmother's sister, has disappeared and left her entire estate to Ellory. The house is amazing and the bank account to go with it isn't too shabby either. But the second Ellory moves in, strange things start happening. Things move without being touched, doors open by themselves, and she hears voices whispering to her. Ellory must figure out what's really going on here. Before it's too late.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7"><span className="text-2xl text-red-600">💵💵ON SALE FOR A LIMITED TIME!!💵💵</span>Click <a href="https://www.amazon.com/dp/B0BXQ3T5F6" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: The Haunting of Seaport Inn</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Bianca Merriweather was looking for a change in her life when she stumbled on an opportunity to purchase a beachfront inn. It needed some renovations, but other than that it seemed like the perfect investment opportunity. But the offer seemed too good to be true. And maybe it was. She wasn't there long before strange things started happening. And then it was up to Bianca to figure out exactly what was going on before she could open for business. After all, she didn't want to frighten her guests.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYXH5QSK" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>
                
                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The Seer Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The Seer</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Layla Henderson thought she had everything going for her until her car accident. Now she has some new... friends? It seems the veil between the living and the dead has suddenly gone thin for Layla. And now she sees dead people. But one little girl is the only spirit that Layla is interested in helping. She's a mysterious child, having been found by police in an abandoned house with no inkling of how she got there. Layla is determined to use her newfound ability to help her. No matter the cost.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7"><span className="text-2xl text-red-600">💵💵ON SALE FOR A LIMITED TIME!!💵💵</span>Click <a href="https://www.amazon.com/dp/B0BXJRHM2D" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: What She Saw</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Layla's adventures seeing dead people continue in this series. This time her best friend Caitlin is getting married and Layla is helping her plan the wedding. But while she is taking pictures of the venue, she notices a strange figure in one of them. It was a woman who had been murdered at that location and needed Layla's help to figure out what happened to her. Layla is happy to help and so is her police officer boyfriend Patrick. They'll just have to solve the case without ruining the wedding.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BYY7QD6R" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">Spellbound: Tales of Myst Haven Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: Spellbound: Tales of Myst Haven</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Willow Lansbury divided her time between running her bookstore, reading, and gaming. She had a taste for rare books, fantasy novels, and tabletop RPGs. That is why she got the attention of the Magusterial people of Myst Haven as an ideal candidate for their newly created game. A game that would bring them the help the Magusterials desperately needed to fight the Glitchens while giving Willow and her friends the ultimate gaming experience - a fully immersive adventure in a real magical world.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7"><span className="text-2xl text-red-600">💵💵ON SALE FOR A LIMITED TIME!!💵💵</span>Click <a href="https://www.amazon.com/dp/B0BXPQFFHJ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: Inherited Magic</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Willow Lansbury is now quite comfortable traveling back and forth between her home in San Diego and her new home in Myst Haven among the Magusterials. She has spent a lot of time getting to know her biological mother, Wilhelmina Daisyfield, and she is learning magic from her on a regular basis. She is even planning to teach a class on fighting wisps at Havenwood Academy. But something isn't right when she starts to teach the class. Can she figure out exactly what is amiss before it's too late?</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ2XVKM9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The S.P.I.R.I.T. Adventures Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The S.P.I.R.I.T. Adventures</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">The S.P.I.R.I.T. paranormal investigators have a mission. They want to prove once and for all that - GHOSTS ARE REAL! They had only just begun their first YouTube video - an investigation of the Whaley House in San Diego - when they get an email from a desperate single mom who thinks her house is haunted and that the spirits are particularly tormenting her teenage daughter. The team is ready to dive in and help. But first and foremost, they can't screw it up. If they do, someone could get hurt.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7"><span className="text-2xl text-red-600">💵💵ON SALE FOR A LIMITED TIME!!💵💵</span>Click <a href="https://www.amazon.com/dp/B0BZN626H2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: An Ordinary Housewife's Ghost</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">The S.P.I.R.I.T. gang is back! This time a housewife in a wealthy neighborhood has contacted them about some strange happenings in her lavish home. The gang is a little intimidated at first, but they soon come to like Mary Kay Winthrop and want to help her with the spirit that is causing chaos in her home. But as they learn more about what is going on, the story becomes more personal. It seems Mary Kay has a connection to the spirit in her home and that's why it's causing her so much trouble.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ52ZHWZ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The Lycan Saga Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The Lycan Saga</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">The Montoro Clan is the oldest werewolf clan in the United States, residing at the southern end of the Appalachian Trail high in the mountains. Through the generations, they have maintained their distance from the humans, only dealing the occasional looky-loos or casually curious parties. The humans fear them and reject them for being different and so stay away from them as a matter of principle. But then a young human girl goes missing. And the shapeshifting beasts become the obvious suspects.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-8 leading-7">Click <a href="https://www.amazon.com/dp/B0C3DLGYJV" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to purchase the novel.</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book Two: Wolf By Nature</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">The Montoro werewolf clan is trying to get back to its quiet reclusive life after the tumult of a murdered girl being found on their reservation. But their peaceful lifestyle is fragile and it's soon shattered when a team of scientists show up wanting to study their werewolf nature. And then one of them is found dead. Once again, Daisy Lightheart finds her clan caught up in a murder investigation and this time their motive is stronger than ever. Can she save her clan and clear their names again?</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ7652RW" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">The Wordsmith Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: The Wordsmith</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Allie spends her days with her nose stuck in a book, much to her mother's dismay. But then one day she decides to try her hand at writing her own stories using an antique journal and pen set that her mother bought at a flea market. There's something strange about this journal and pen set though. It seems that anything she writes with them comes to life. And now Allie has the opportunity to live out every bookworm's dream by immersing herself in a fantasy novel. Time to write the perfect story.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZMV3RZW" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">Zombies Among Us Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: Zombies Among Us</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Dr. Marianne Kobiak invented a drug that allowed people to live forever. But she realized too late that her miracle drug would turn half the world into zombies. She's now racing to find a cure and save the world. Meanwhile, everyone else is just trying to survive.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZ9R46NB" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className="mb-2 mt-4 text-2xl text-red-800 font-bold tracking-wide">Shadow Faeries Series</p>
                <p className=" mb-4 mt-4 text-green-800 font-bold tracking-wide">Book One: Shadow Faeries</p>
                <p className=" mt-4 text-green-800 font-bold tracking-wide  underline underline-offset-1">Synopsis</p>
                <p className="mb-4 mt-4 leading-7">Maeve Lacewing is heir to the throne in Shadowland, destined to rule over the shadow faeries. But first she must go on her Luminescence, a trip all faeries take to the human world when they come of age. It's their chance to decide if they want to stay in the human world or return to Shadowland. For Maeve, this trip is symbolic. She must return to ascend the throne. But she's not sure if that's what she wants. She only knows that it's expected of her. If only she could live in both worlds.</p>
                <p className="mb-4 mt-4 leading-7">Click <a href="https://www.amazon.com/kindle-vella/story/B0BZGLCVZ4" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to read this story on Kindle Vella.</p>
                <p className="mb-4 leading-7">Completed novel coming soon!</p>

                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your creative wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">I walked as quickly as I could along the uneven path through the woods back to my house, trying desperately not to trip.  I had to get home by midnight.  I should never have risked staying out this late.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the eleventh edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Try talking to the moon some time.  It may talk back,</p>
                <p>C.K.</p>
                <p>April 30, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter11;