import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import {Adsense} from '@ctrl/react-adsense';

function Newsletter2() {
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
                    Welcome to the second edition of the newsletter for C.K. Brandywine Publishing.  I hope by now that you have found me on Kindle Vella and are getting spooked, shocked, or spelled by my stories.  I&apos;m so excited week after week to watch these stories grow, 
                    and I can&apos;t wait to see where they are headed.  Please take this journey with me!
                </p>
                <p className="mb-4 mt-4 leading-7">👉👉Please click <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to find me on Kindle Vella, if you haven&apos;t already.👈👈</p>
                <p className="mb-4 mt-4 leading-7">Also, please <Link to="/subscribe" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">💌subscribe💌</Link> to this newsletter so I can keep you up to date on all the latest things I&apos;m working on.</p>
                <p className="mb-4 mt-4 leading-7">
                    And don&apos;t forget to stop by my <a href="https://www.ckbrandywine.com/" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">website</a>.  You will find a number of free downloads there, including free bookmarks, as well as a link to a free online book journal for you to use as you wish.  I plan to continuously 
                    add more content and freebies to my website so please check back often.
                </p>
                <p className="mb-4 mt-4 leading-7">Please follow me on social media to keep up with all things Brandywine.  The links are up there 👆.</p>
                <p className="mb-4 mt-4 leading-7">
                    You saw in my first edition that I plan to have three sections in each newsletter.  I will continue that today, but I also welcome any feedback from anyone about other things they would like to see here.  Reach out on social media and let me know your thoughts.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Writing</p>
                <p className="mb-4 mt-4 leading-7">I am continuing my work on the five stories I have previously outlined, <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Each story is at a really exciting stage, and I&apos;m just as thrilled as you are - hopefully - to see what happens with each of them.  I began each story with only a loose idea of where I wanted each one to go, so I&apos;m 
                    actually surprising myself as I write them.  The characters are evolving on the page right in front of me, and I love getting to know them.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.  I sincerely hope you have as much fun reading them as I&apos;m having writing them.
                </p>
                <p className="text-2xl text-blue-800 font-bold">**Coming Soon**</p>
                <p className="mb-4 mt-4 leading-7">
                    I&apos;m also pleased to announce that I have another story that I&apos;m working on that I will be publishing soon.  This time I will be reaching down into my southern roots and cooking up a little southern gothic horror with a werewolf twist.  The general 
                    story idea I have so far is about a werewolf pack living in the southern part of the Appalachian trail who are in constant conflict with the human society surrouding them.  I&apos;m planning for it to be a sort of political parallel to the prejudices that are 
                    still occuring in our society today.  It will be something of a classic slasher horror with a political twist, served deep fried with a side of gravy.
                </p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    I just started reading The Blessing Way by Tony Hillerman.  If you haven&apos;t heard of Tony Hillerman, I highly recommend reading his books.  I read a number of his books years ago, but it&apos;s been a while, to the point that I don&apos;t remember 
                    all of the details and it&apos;s like reading them anew.   His novels are supernatural mysteries set in Navajo country, and are now being made into a television series called Dark Winds on AMC.  I saw the first episode and I was immediately 
                    hooked.
                </p>
                <p className="mb-4 mt-4 leading-7">    
                    I have a bit of Native American blood myself.  My grandfather&apos;s grandmother was Cherokee and most of my family members still live on the same land where her tribe lived at the base of the Appalachian trail in Alabama, so I am utterly 
                    fascinated with Native American culture.  There is an inherent mysticism in everything they do and the belief in magic and spirits and forces beyond our world permeate every aspect of their culture.
                </p>
                <p className="mb-4 mt-4 leading-7">
                    There&apos;s a funny side effect of growing up on Native American land.  You hear so many tales of ghosts and spirits and the afterlife that you become unafraid of them.  I guess that&apos;s why I like writing about them so much.  And reading about them, of course.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  I&apos;ll get you started.  The rest is up to you.  Please reach out on social media with whatever you come up with. I would love to hear from you!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">The sand was gritty beneath my feet and the sun blazed over my head.  I could not possibly have seen what I just saw.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  I hope you&apos;ve enjoyed the second edition of my newsletter.  Happy reading!</p>
                <p className="mt-4 leading-7">May your world be filled with dragons and butterfies,</p>
                <p>C.K.</p>
                <p>June 15, 2022</p>
            </div>
        </div>
        <Adsense
            client='ca-pub-7831705014229923'
            slot='4798207906'
        />
    </div>
  )
}

export default Newsletter2;