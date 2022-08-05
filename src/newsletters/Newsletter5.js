import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function Newsletter5() {
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
                    Welcome to the fifth edition of the newsletter for C.K. Brandywine Publishing.  First off, I also want to say a big Hello and Welcome 👋👋 to my new subscribers.  I hope you will find something here that you like 😀.  I also want to say that I 
                    hope everyone is surviving the nasty heat wave out there.  But hey, what better activity on a hot summer day than sitting inside reading with a nice cool drink?  Sounds like the perfect day to me!</p>
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
                <p className="mb-4 mt-4 leading-7">I&apos;m very excited to announce that I recently published the first few episodes of The Lycan Saga, my new series on Kindle Vella!  Please click <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to start reading  
                this story.  And don&apos;t forget to click Follow to receive notifications when a new episode is released.  If you like werewolves, mysteries, and southern cooking this story is definitely for you.  I have set a lofty goal of trying to include a recipe with each 
                episode - typically something that would come out of a southern kitchen - and I gotta tell ya, I&apos;m really enjoying it so far.  It&apos;s been a challenge to incorporate something food related into each episode so that I can include a recipe for it at the end, but 
                I think I&apos;m making it work.  Oh, and there&apos;s the whole werewolf/mystery thing I&apos;ve got going as well.  If everything keeps going as planned, this may be my favorite series to write.  But that doesn&apos;t mean the others aren&apos;t really fun 
                to write, too.  I hope you check out all of them and find something you like 🤓.</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my other Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    The Final Girl Support Group by Grady Hendrix.  I&apos;ve also read The Southern Book Club&apos;s Guide to Slaying Vampires by the same author. Both are really great reads.  I like The Final Girl Support Group because I have always been a huge horror movie nut, and it 
                    doesn&apos;t get any better than a classic slasher flick - or if you subscribe to Shudder like me, you call them Slashics.  This book explores the final girl trope in a new and clever way by assuming all the Slashics were based on real people.  And now all those final 
                    girls have to try and find a way to live normal lives.  You will recognize the characters in this book pretty quickly if you&apos;ve spent countless hours watching horror films, and that&apos;s what makes this book so relatable.  I highly recommend it.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your create wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">The breath on the back of my neck was cold when it should have been hot.  All I could think to do was keep running.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the fifth edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Reach for the stars but follow the moon,</p>
                <p>C.K.</p>
                <p>August 5, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter5;