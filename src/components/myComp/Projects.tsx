import { AiFillSetting } from "react-icons/ai";
import { GiPointySword } from "react-icons/gi";
import BlogAbout from "./BlogAbout";
import WpAbout from "./WpAbout";
import ChatAppAbout from "./ChatAppAbout";

function Projects() {
  return (
    <>
      <div id="projects" className="max-sm:mt-8 mt-14 border-y-4">
        <div className="w-full max-sm:h-12 h-20 flex gap-2 justify-center items-center bg-[#D874F7]">
          <AiFillSetting size={40} color="#74F797" className="max-sm:hidden" />
          <AiFillSetting size={25} color="#ff2056" />
          <AiFillSetting color="#797DED" />
          <p
            style={{ fontFamily: "'Titan One',sans-serif" }}
            className="md:text-5xl lg:text-5xl sm:text-3xl text-2xl cursor-not-allowed"
          >
            Projects
          </p>
          <AiFillSetting color="#797DED" />
          <AiFillSetting size={25} color="#ff2056" />
          <AiFillSetting size={40} color="#74F797" className="max-sm:hidden" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        {/* Blog */}
        <div className="w-full border-b-4 flex justify-center">
          <div className="w-[90%] border-x-4 flex flex-col sm:flex-row gap-4">
            {/* <img src="blog.png" alt="" className="min-w-[60%] sm:border-r-4 in-l-image" /> */}
            <iframe src="https://sudip-blog.zeabur.app/blogs" className="min-w-[60%] sm:h-96 h-[500px] sm:border-r-4 in-l-image" ></iframe>
            <div className="w-full mt-4 flex flex-col gap-2 sm:h-full max-sm:pl-4 in-r-image">
              <p
                style={{ fontFamily: "'Jersey 25',sans-serif" }}
                className="text-3xl text-center text-orange-500"
              >
                Blog Web-page
              </p>
              <p
                style={{ fontFamily: "'Science Gothic',sans-serif" }}
                className="text-[#30B4CF] text-2xl border-b-2 w-fit"
              >
                Features:
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Responsive design with mobile-first approach.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Role-based access control with JWT authentication.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Homepage with blog summaries and 'Read More' functionality.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Blog like and share functionality.
              </p>
              <div className="w-full flex justify-center relative pb-4">
                {/* <Button className="w-fit">More About</Button> */}
                <BlogAbout />
              </div>
            </div>
          </div>
        </div>
        {/* WP */}
        <div className="w-full border-y-4 flex justify-center">
          <div className="w-[90%] border-x-4 flex flex-col sm:flex-row-reverse gap-4">
            <div className="min-w-[60%] flex  justify-center bg-gray-900 sm:border-l-4 in-r-image">
              <img src="wp.gif" alt="" className="min-w-[20%] max-w-75" />
            </div>
            <div className="w-full mt-4 flex flex-col gap-2 sm:h-full pl-4 in-l-image">
              <p
                style={{ fontFamily: "'Jersey 25',sans-serif" }}
                className="text-3xl text-center text-orange-500"
              >
                Whatsapp AI Bot
              </p>
              <p
                style={{ fontFamily: "'Science Gothic',sans-serif" }}
                className="text-[#30B4CF] text-2xl border-b-2 w-fit"
              >
                Features:
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                AI Chat Replies: Casual, friendly AI responses.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Quick AI Search: Start with #ai- for instant answers.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Message Filtering: Skips messages with "password" or personal
                content.
              </p>
              <div className="w-full flex justify-center relative pb-4">
                {/* <Button className="w-fit">More About</Button> */}
                <WpAbout />
              </div>
            </div>
          </div>
        </div>
        {/* Chat App */}
        <div className="w-full border-y-4 flex justify-center">
          <div className="w-[90%] border-x-4 flex flex-col sm:flex-row gap-4">
            <div className="min-w-[60%] flex  justify-center bg-gray-900 sm:border-l-4 in-l-image">
              <img src="chatapp.jpg" alt="" className="min-w-[20%] max-w-75" />
            </div>
            <div className="w-full mt-4 flex flex-col gap-2 sm:h-full pl-4 in-r-image">
              <p
                style={{ fontFamily: "'Jersey 25',sans-serif" }}
                className="text-3xl text-center text-orange-500"
              >
                Real Time Chat App
              </p>
              <p
                style={{ fontFamily: "'Science Gothic',sans-serif" }}
                className="text-[#30B4CF] text-2xl border-b-2 w-fit"
              >
                Features:
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Real-time Messaging: Instant delivery via Socket.io
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Global Search: Search '@' to find new users in DB, or search normally for existing chats.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Secure Auth: Complete Login/Signup system with encrypted Chats.
              </p>
              <p className="flex gap-1 pl-4 text-sm font-mono">
                <GiPointySword size={20} />
                Real time push notification.
              </p>
              <div className="w-full flex justify-center relative pb-4">
                {/* <Button className="w-fit">More About</Button> */}
                <ChatAppAbout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
