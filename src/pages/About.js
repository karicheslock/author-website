import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

function About() {
  return (
    <div className="flex flex-col justify-items items-center mx-auto w-screen">
          <Navbar />
          <div className="flex justify-between h-screen">
            <LeftSidebar />
            <div className="bg-green-900 w-full">
                <div className="bg-amber-50 font-mono m-8 p-2 border-2 rounded border-amber-900">
                    <p className="mb-4">C.K. Brandywine lives in San Diego with her husband and two rescue dogs, Bruce and MJ.  However, she grew up in the south and finds inspiration for many of her stories in classic southern gothic horror.  She is a small part Native American 
                        and grew up listening to stories about houses built on Native American burial ground.  She has even had a few strange experiences herself which leads her to question the unknown and wonder about the supernatural.
                    </p>
                    <p>When she is not writing, she enjoys cooking, reading, and playing video games.  She is also a hobby web developer.  Other inspiration for her writing comes from the video games that she plays, mainly MMO style fantasy games.  She often comments 
                        that playing these games reminds her of a fantasy novel come to life.  After all, what could be better than living out your favorite fantasy novel in real life?  Therein lies the magic.
                    </p>
                </div>
            </div>
            <RightSidebar />
          </div>
      </div>
  )
}

export default About;