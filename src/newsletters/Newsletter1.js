import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

function Newsletter1() {
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
                        <a href="https://www.facebook.com/CKBrandywine" className="text-amber-900 mr-4 ml-4" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ckbrandywine" className="text-amber-900" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-4 border-amber-900 bg-amber-50 p-4">
                <p className="mb-5 text-2xl text-red-800 font-bold">Hello Happy Readers!</p>
                <p className="mb-4 leading-7">
                    Welcome to the inaugural edition of the newsletter for C.K. Brandywine Publishing.  If you have found me on Kindle Vella by now, you will see that I&apos;m just starting to flex my fingers over the keyboard in the 
                    writing world.  I&apos;ve started with five stories that I&apos;m really excited about, and I have a few more in the works that I hope to be releasing soon.
                </p>
                <p className="mb-4 mt-4 leading-7">👉👉Please click <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to find me on Kindle Vella, if you haven&apos;t already.👈👈</p>
                <p className="mb-4 mt-4 leading-7">Also, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">💌subscribe💌</Link> to this newsletter so I can keep you up to date on all the latest things I&apos;m working on.</p>
                <p className="mb-4 mt-4 leading-7">
                    And don&apos;t forget to stop by my <a href="https://www.ckbrandywine.com/" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">website</a>.  You will find a number of free downloads there, including free bookmarks, as well as a link to a free online book journal for you to use as you wish.  I plan to continuously 
                    add more content and freebies to my website so please check back often.
                </p>
                <p className="mb-4 mt-4 leading-7">Please follow me on social media to keep up with all things Brandywine.  The links are up there 👆.</p>
                <p className="mb-4 mt-4 leading-7">
                    To start out, I thought I would structure these newsletters with three recurring sections to keep you informed of everything going on in my world.  Specifically, What I&apos;m Writing, What I&apos;m Reading, and What You&apos;re Writing.  
                    The first two sections are self-explanatory.  For the last section, I will supply a writing prompt each week for you to flex your own fingers over the keyboard.  After all, creativity lives in all of us.  Perhaps you will find some 
                    inspiration here.  So without further adieu…
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Writing</p>
                <p className="mb-4 mt-4 leading-7">I now have five episodic stories that I&apos;m publishing on Kindle Vella.  I am adding a new episode to each one every week so you will never run out of content.  All of my stories are in the fantasy genre with a few different subgenres.</p>
                <p className="mb-4 mt-4 leading-7">
                    <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a> is about a young chef named Samantha Walker who finds some magical grimoires in a hidden room in the back of her restaurant.  And then she finds out that she herself may be a witch.  She also finds out that a lot of people are 
                    looking for her now that she has the long lost grimoires of Millicent Willoughby.  It will be up to her to figure out who she can trust.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a> is about a young writer who inherits a beautiful old mansion from a great aunt she never knew she had.  But when she moves in, strange things start happening.  Things going bump in the night is just the start of it.  She 
                    desperately needs to find out what happened to her aunt who mysteriously disappeared.  Otherwise, the strange happenings may not ever stop.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a> is about a young woman named Layla Henderson who has a near death experience and wakes up with the ability to see spirits.  One spirit in particular stands out to her.  A little girl who was found in an abandoned house with only a few clues to 
                    her identity or what happened to her.  Layla desperately wants to find out what happened to her and must figure out a way to relay information from the dead girl to the police without seeming like a crazy person or worse.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a> is a story for all you tabletop gamers out there.  Willow Lansbury is a bookshop owner and a hobby D&amp;D gamer.  One day a rare book dealer shows up at her shop bringing a book to show her that is a lot more than meets the eye.  
                    One touch and Willow is transported to another world, a magical world with a magical game.  She must figure out how to play by the rules if she ever wants to get back home.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    And last but not least, <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a> is about a team of paranormal investigators, specifically the San Diego Paranormal Investigation and Research Initiative Team, who are attempting to bring in a little side hustle money while also proving that… drumroll, 
                    please… GHOSTS. ARE. REAL.  Their first case involves a single mother at her wits end trying to protect her teenage daughter from their seemingly haunted house.  S.P.I.R.I.T. must figure out what&apos;s going on so they can help these people.  Otherwise, they 
                    stand to make big fools of themselves.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    If you like the sound of any of these stories, please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow them so you can get notified of each episode as it&apos;s released.  I sincerely hope you have as much fun reading them as I&apos;m having writing them.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    The more I sit down and try to write, the more I appreciate the books that I read.  Meaning, now I know just how much work goes into writing a book.  I know a lot of you are probably avid readers.  I myself read anywhere from 75 to 100 books a year and can&apos;t 
                    stand to have less than five books in progress at any given time.  And so, I thought I would write this section in my newsletter to show my appreciation for other writers out there as well as to show you where I&apos;m drawing some of my own inspiration.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    Right now, I&apos;m reading, or rather listening to, Andrea Vernon and the Corporation for UltraHuman Protection by Alexander C. Kane.  I am listening to it on Audible but I think you can also find it on Kindle Unlimited.  In this particular case, 
                    however, I am going to specifically recommend listening to the audiobook version of it.  The narrator, Bahni Turpin, is just amazing.  She changes voices for the different characters seamlessly and adds a whole other layer to the enjoyment of 
                    this book.  It&apos;s a laugh-out-loud story of superheroes trying to save the world from an alien invasion.  It has to be one of the funniest science fiction books I&apos;ve ever read with some truly unforgettable characters.  The impressive list of 
                    superheroes alone is worth the read.  I highly recommend it, especially if you need something to provoke a belly laugh among all the doom and gloom in the world right now. 
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now what you&apos;ve all been waiting for. A writing prompt to send you on your own creative journey.  So here goes…</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">I woke up lying flat on my back staring up at the sky, the grass tickling my back and the sun tickling my eyelids.  I couldn&apos;t remember how I got there.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  I hope you&apos;ve enjoyed my first ever newsletter.  Happy reading!</p>
                <p className="mt-4 leading-7">May you always feel your Muse's hand on your shoulder,</p>
                <p>C.K.</p>
                <p>June 1, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter1;