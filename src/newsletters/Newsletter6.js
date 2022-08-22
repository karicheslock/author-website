import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

function Newsletter6() {
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
                    Welcome to the sixth edition of the newsletter for C.K. Brandywine Publishing.  I hope you are all doing well and enjoying your summer reading 🤓📖.  I know I&apos;ve spent a lot of time this summer shopping around for new authors and series to read, and I&apos;ve found some pretty good stuff.  But 
                    more about that later.  Suffice it to say, I&apos;m spending most of my time reading and writing right now and am constantly surrounded with stories.  It&apos;s not a bad life 😊.</p>
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
                <p className="mb-4 mt-4 leading-7">My new series The Lycan Saga is well under way by now, and so are the recipes included with each episode!  If you&apos;re a foodie and also kinda into werewolves, you will love this series.  Please click <a href="https://www.amazon.com/kindle-vella/story/B0B83N5SP2" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">here</a> to start reading  
                this story.  And don&apos;t forget to click Follow to receive notifications when a new episode is released.  This story is going to be part murder mystery and part supernatural drama with some reflection on social issues like prejudice and the entitlements that come from having money.  So think 
                of this series as a classic whodunnit with a side of social awareness.  Start reading today!</p>
                <p className="mb-4 mt-4 leading-7">Anyway, here are the links to my other Kindle Vella stories if you haven&apos;t found them already: <a href="https://www.amazon.com/kindle-vella/story/B0B242TJWR" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seasoned Witch</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2941LDQ" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Haunting of Ellory May</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B295551X" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The Seer</a>, <a href="https://www.amazon.com/kindle-vella/story/B0B2BWFF2H" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Spellbound: Tales of Myst Haven</a>, and <a href="https://www.amazon.com/kindle-vella/story/B0B2CJL1P9" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">The S.P.I.R.I.T. Adventures</a>.</p>
                <p className="mb-4 mt-4 leading-7">
                    Please head over to <a href="https://www.amazon.com/s?k=c.k.+brandywine&rh=n%3A21165462011&ref=nb_sb_noss" target="_blank" rel="noreferrer" className="text-red-800 font-bold hover:text-green-900">Kindle Vella</a> and follow these stories so you can get notified of each episode as it&apos;s released.</p>
                
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What I&apos;m Reading</p>
                <p className="mb-4 mt-4 leading-7">
                    Indexing by Seanan McGuire.  This book was appealing to me for many reasons.  First of all, it was originally published in episodes on Kindle and then released as a novel.  That gave me hope about my own series 😊.  Also, the subject matter is more than a little appealing.  It is 
                    an imaginative and gritty retelling of all the classic fairy tales.  Fairy tale characters are evil in this book.  They bring death and destruction for the sake of 'following their narrative'.  I love the idea of something intangible becoming tangible and this author seems 
                    to have nailed that concept.  It&apos;s really inspiring in terms of thinking more creatively about the world around you and different ways you can approach world building as a writer.  If a story becomes a living thing, then what happens?  It&apos;s a great concept.
                </p>
                <p className=" mb-4 mt-4 text-2xl text-red-800 font-bold tracking-wide">What You&apos;re Writing</p>
                <p className="mb-4 mt-4 leading-7">And now it&apos;s your turn to write.  Here&apos;s another prompt to start your create wheel turning.  Please find me on Facebook and post what you come up with.  I would love to read it!</p>
                <div className="border-2 border-dashed bg-gray-50 p-4">
                    <p className="mb-4 mt-4 leading-7">I had been seeing shadows at the corners of my eyes for weeks now.  And then I decided to face one full on.</p>
                    <br />
                    <p className="mb-4 mt-4 leading-7">Your story continues from here…</p>
                </div>
                <p className="mb-4 mt-4 leading-7">And that&apos;s it!  Thank you for reading the sixth edition of my newsletter.  I hope to hear from you soon!</p>
                <p className="mt-4 leading-7">Inspiration is all around you.  Just keep looking,</p>
                <p>C.K.</p>
                <p>August 22, 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter6;