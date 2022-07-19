import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function Newsletter3() {
  return (
    <div className='p-8 bg-green-900 h-full font-mono text-xl'>
        <div className="w-4/5 mx-auto">
            <div className="flex items-center border-4 border-amber-900 bg-amber-50 p-4 mb-4">
                <div className="flex items-center">
                    <img src="../favicon.jpg" alt="The logo of C.K. Brandywine Publishing" className="w-1/12 rounded-full mr-4"></img>
                    <p className="text-amber-900 font-bold text-3xl">C.K. Brandywine Publishing Newsletter</p>
                </div>
                <div className='mr-4 flex flex-col whitespace-nowrap'>
                    <p className='text-amber-900 mb-2'>Follow me</p>
                    <div className='flex justify-between'>
                        <a href="https://www.facebook.com/CKBrandywine" className="text-amber-900" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ckbrandywine" className="text-amber-900" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://www.twitter.com/ckbrandywine1" className="text-amber-900" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-4 border-amber-900 bg-amber-50 p-4">
                <p className="mb-5 text-2xl text-red-800 font-bold">Hello Happy Readers!</p>
                <p className="mb-4 leading-7">
                    Welcome to the third edition of the newsletter for C.K. Brandywine Publishing.  First of all, I want to say thank you for being an early reader of my works.  I&apos;m pushing really hard to put content out there for you to read, and I hope you are having 
                    as much fun reading it as I am writing it.
                </p>
                <p className="mb-4 mt-4 leading-7">👉👉Please click <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to find me on Kindle Vella, if you haven&apos;t already.👈👈</p>
                <p className="mb-4 mt-4 leading-7">Also, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">💌subscribe💌</Link> to this newsletter so I can keep you up to date on all the latest things I&apos;m working on.</p>
                <p className="mb-4 mt-4 leading-7">
                    And don&apos;t forget to stop by my <a href="https://www.ckbrandywine.com/" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">website</a>.  You will find a number of free downloads there, including free bookmarks, as well as a link to a free online book journal for you to use as you wish.  I plan to continuously 
                    add more content and freebies to my website so please check back often.
                </p>
                <p className="mb-4 mt-4 leading-7">Please follow me on social media to keep up with all things Brandywine.  The links are up there 👆.</p>
                <p className="mb-4 mt-4 leading-7">
                    If you read my previous newsletters, you will know that I am breaking down these newsletters into three sections as you will see below.  Please let me know if you are enjoying this content or if there is anything else you would like me to include here.  Reach out on social media and let me know your thoughts.  I welcome all feedback.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Writing</p>
                <p className="mb-4 mt-4 leading-7">My stories on Kindle Vella are really starting to take shape.  Some days I feel like I can&apos;t type the words fast enough, and I&apos;m so excited for you to take this journey with me.  I&apos;m seriously considering releasing two episodes 
                a week instead of just one - if I can pull it off.  Please message me if you would like to see more content or if you&apos;re happy with one episode a week.  If my math is correct, that would mean writing 3000-4000 words a day!  Since I&apos;m new at writing, I have no idea 
                if that is too much or not enough.  If there are any other new or experienced writers out there, I would love to hear your thoughts.  How many words do you typically try to write in a day?  Is there some point where you think the quality of your writing starts to fall off? 
                I have so many ideas running through my head right now.  I keep wondering if they will slow down at some point.</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                <p className="text-2xl text-blue-800 font-bold">**Coming Soon**</p>
                <p className="mb-4 mt-4 leading-7">
                    I mentioned in my <Link to='/newsletter2' target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">last newsletter</Link> that I&apos;m working on a new story about a society of werewolves facing discrimination from the human 
                    world.  I plan for it to be a southern gothic horror and politcal mystery tied up into one.  I have been doing a lot of research lately on the types of werewolf novels out there, and I&apos;m noticing that the vast majority of them fall in the paranormal 
                    romance category.  My story is going to be totally different from that, so I hope it will find it&apos;s own fanbase.  I have always enjoyed supernatural horror and classic whodunnit mysteries, so I was hoping to join the two genres with this series.  Maybe 
                    there are other readers out there who have the kind of strange taste that I do.  Once again, I would love to hear from you about your taste in reading.  If you&apos;re here, you probably like supernatural fantasy, but I would love to hear about the microgenres 
                    that you like.  Reach out on social media so we can discuss!
                </p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading - And Watching</p>
                <p className="mb-4 mt-4 leading-7">
                    I can never resist the opportunity to read books that are made into movies or television series so I can compare and contrast the two.  In this case, I&apos;m reading The Umbrella Academy comic books to go along with the recently released Season 3 on Netflix.  I 
                    was probably a little too excited to learn that they are available through my Kindle Unlimited subscription.  That service is worth every penny.  I&apos;ve only read the first issue so far, but I must say I love it just as much as the show.  These comics are going to keep me occupied 
                    for a while - but I&apos;ll be done binging the show tonight.  I heard that the hotel that&apos;s featured in the third season is a lot cooler in the comics.  I can&apos;t wait to find out!
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your create wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">Last night I dreamt of a different version of myself...</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the third edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Never forget that fairies are real,</p>
                <p>C.K.</p>
                <p>June 27, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter3;