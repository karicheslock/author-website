import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

function Newsletter4() {
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
                    Welcome to the fourth edition of the newsletter for C.K. Brandywine Publishing.  First off, I want to say that I realize it&apos;s been a while since my last newsletter, but I promise that won&apos;t become a habit.  This is all still very new to 
                    me, and I&apos;m still trying to get into a routine.  At some point, I&apos;m hoping this will be an every other week thing, but until then, please enjoy this latest edition of the C. K. Brandywine Newsletter.  I also want to say a big Hello and 
                    Welcome 👋👋 to my new subscribers.  I hope you will find something here that you like 😀.</p>
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
                <p className="mb-4 mt-4 leading-7">If you have been following my Facebook posts - and I hope that you have - you know by now that I&apos;ve been working on a new series called The Lycan Saga.  I&apos;m super excited about it, and I hope you will be too.  This is going to be 
                a story about werewolves, and I can&apos;t wait to start publishing it.  One of the reasons I&apos;m so excited about it is that it&apos;s not going to be your typical werewolf story.  First of all, there will be a strong female lead character.  &#40;If you have been reading 
                my other stories, you will notice that all of them have a strong female lead and I wanted to continue that with this story.&#41;  Secondly, these werewolves will be capable of magic, and not just shapeshifting magic.  Are werewolf witches already a thing?  If not, they 
                will be soon.  And lastly, my main character is the head chef at a bar and restaurant, so I plan to include a recipe of hers at the end of each chapter.  This story will be set in Appalachia, meaning the recipes will mostly be from the deep fried south.  So get ready to 
                chow down on some barbecue and cornbread alongside a fierce and loyal werewolf pack.  Oh, but look out for the locals.  They&apos;re not so friendly to those of the shapeshifting variety.</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my other Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    The Haunting of Leigh Harker by Darcy Coates.  Ok, so I couldn&apos;t resist a title so similar to one of my own stories, and I must say, I have absolutely zero regrets.  This was a great ghost story with a surprising twist that I didn&apos;t see coming.  I 
                    won&apos;t spoil anything, of course, but suffice it to say that I highly recommend this book.  Not only is it a great ghost story, it has a lot of heart and friendship and family and basically all of the good feels - besides the whole spirit at unrest thing.  
                    I love reading stories with a surprise twist.  It gets me thinking about my own writing and ways to improve it.  Anyway, check it out if you&apos;re looking for a good spooky story with some surprising feel good aspects to go along with it.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your creative wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">The blinding sun distorted the chaos unfolding in front of me.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the fourth edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Always remember to daydream,</p>
                <p>C.K.</p>
                <p>July 26, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter4;