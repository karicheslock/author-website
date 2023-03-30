import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

function Newsletter7() {
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
                    Welcome to the seventh edition of the newsletter for C.K. Brandywine Publishing.  First of all, a big hello and welcome to my new subscribers 👋👋.  I hope you find something interesting here.  I also hope everyone is staying cool here in these waning days of summer.  
                    I love this time of year when the hot weather is winding down and Halloween - my favorite holiday - is just around the corner.  I don&apos;t know about you, but I&apos;m ready to decorate my house with spider webs and put on a horror movie marathon 👻💀⚰️.  Just a few more weeks!</p>
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
                <p className="mb-4 mt-4 leading-7">I have yet another new series in the works and I&apos;m super excited about it.  I know I already have six series going right now, but I just can&apos;t pass up an idea if one comes along.  My idea is still in its preliminary stages but 
                I&apos;m hoping to have something published and available either later this month or early next month.  This one is going to be about a young girl who discovers she has a superpower, which is something I have wanted to write about for a while now.  This girl is going to discover that she has 
                the ability to write stories and have them come to life.  But there&apos;s a bad guy out there who wants to steal her powers and stop all the stories from being written.  It will be a battle of wills and a battle of words and I can&apos;t wait to see where it goes.  I&apos;m probably 
                going to write several stories within the main story which will be a fun and exciting challenge.  Follow me on social media for updates on this new series as they are available!</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my other Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Lycan Saga</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    Skinwalker, Jane Yellowrock, Book 1 by Faith Hunter.  This story could not be more my taste.  It&apos;s about a skinwalker of Cherokee descent who is a shapeshifter and a vampire hunter.  Oh and it&apos;s set in the streets of New Orleans.  That pretty much ticks all my boxes 
                    as far as a good read that appeals to me.  This book has some interesting interludes where the main character transitions to her &apos;beast&apos; and the story is told from her perspective in a transitioned state.  So the language becomes simpler and the character&apos;s actions 
                    become more feral.  I like this sort of magic.  It challenges you to think beyond yourself and tap into your more animalistic nature.  It makes you wonder how you would behave if you had your own inner beast.  Anyway, it&apos;s a great story and I can&apos;t wait to continue the series.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your creative wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">I looked out my window into the pitch black night.  I saw a mist floating in the distance.  And then it started to take shape.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the seventh edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Magic will come into your life if you open your mind and allow it,</p>
                <p>C.K.</p>
                <p>September 6, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter7;