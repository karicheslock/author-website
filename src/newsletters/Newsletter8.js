import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function Newsletter8() {
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
                    Welcome to the eighth edition of the newsletter for C.K. Brandywine Publishing.  First of all, a big hello and welcome to my new subscribers 👋👋.  I hope you find something interesting here.  As far as what&apos;s going on with me, I&apos;m getting ready to 
                    fully immerse myself in Halloween season.  The decorations will be going up this weekend, and I can&apos;t wait.  I&apos;ll be sure to post some pictures on social media so make sure you follow me to see them for yourselves 🎃👻💀⚰️.</p>
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
                <p className="mb-4 mt-4 leading-7">Right now, I&apos;m busily working on completing the first five stories I originally published on Kindle Vella so that I can release them as full length novels.  I&apos;m hoping to have them completed and available for purchase by 
                December.  I will have them available through multiple channels and in multiple formts so that you can find them in whatever format you prefer.  I will keep you posted on my pregress but so far so good 👍.</p>  <p>I&apos;m also working on my next series that will debut soon 
                on Kindle Vella. This one will be about a young girl with the superpower to make the characters from her stories come to life as she writes them.  Stay tuned!  I&apos;m super excited about this one.  I&apos;m hoping to have the first episodes released early next month.</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my other Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Lycan Saga</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    Off to Be the Wizard by Scott Meyer.  I was looking for something a little more lighthearted to read these days, and this book is definitely doing the trick.  Although this book is more science fiction than fantasy, it has elements of both genres that make it a 
                    really rich story.  It&apos;s about an amateur hacker who accidentally finds a computer program that defines his life and everything about him.  So he decides to tweak it.  What could go wrong, right?  Let&apos;s just say that a few mishaps land him in the middle 
                    ages pretending to be a wizard.  I&apos;ll leave it to you to find out exactly how that happens.  Suffice it to say, it&apos;s a wonderful comedy of errors that leaves you wondering if you&apos;re life is just a computer program as well.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your creative wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">I sat down to relax and enjoy my evening after a really long day.  But the quiet of the night was soon disrupted.  I wasn&apos;t alone.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the eighth edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Don&apos;t be afraid of the dark.  Embrace what it holds,</p>
                <p>C.K.</p>
                <p>September 19, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter8;