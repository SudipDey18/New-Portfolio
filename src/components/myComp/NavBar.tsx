import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { FaNetworkWired, FaHandsHelping } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen max-sm:h-10 h-18 border-y-4 flex fixed z-10 to-0% bg-yellow-100">
      {/* big screen */}
      <div className="w-full justify-between items-center max-sm:hidden flex">
        <div className="ml-10 md:w-28 w-20 border-x-4 h-16 flex items-center justify-center">
          <p className="md:text-[210%] text-[140%] text-center font-extrabold cursor-not-allowed rotate-12">
            SUDIP
          </p>
        </div>
        <div className="flex md:gap-8 sm:gap-3 gap-2 items-center">
          <a
            href="#about"
            className="md:text-[120%] text-[100%] text-center font-extrabold hover:-translate-y-0.5 hover:border-amber-400 hover:border-b-3 active:border-green-500 active:border-b-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            About
          </a>
          <a
            href="#projects"
            className="md:text-[120%] text-[100%] text-center font-extrabold hover:-translate-y-0.5 hover:border-amber-400 hover:border-b-3 active:border-green-500 active:border-b-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Projects
          </a>
          <p
            className="md:text-[120%] text-[100%] text-center font-extrabold hover:-translate-y-0.5 hover:border-amber-400 hover:border-b-3 active:border-green-500 active:border-b-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Education
          </p>
          <p
            className="md:text-[120%] text-[100%] text-center font-extrabold hover:-translate-y-0.5 hover:border-amber-400 hover:border-b-3 active:border-green-500 active:border-b-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Skills
          </p>
          <p
            className="md:text-[120%] text-[100%] text-center font-extrabold hover:-translate-y-0.5 hover:border-amber-400 hover:border-b-3 active:border-green-500 active:border-b-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Connect
          </p>
        </div>
        <div className="mr-10 md:w-20 w-14 border-x-4 h-16 flex items-center justify-center">
          <p className="md:text-[210%] text-[140%] text-center font-extrabold cursor-not-allowed rotate-12">
            DEY
          </p>
        </div>
      </div>
      {/* small screen */}
      <div className="w-full justify-center items-center max-sm:flex hidden">
        <div>
          <p className="text-lg font-bold">SUDIP DEY</p>
        </div>
        <div className="absolute left-4 flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <HiOutlineMenuAlt1 />
            </SheetTrigger>
            <SheetContent
              className="w-[80%] max-w-56 bg-yellow-100"
              side="left"
            >
              <SheetHeader>
                <div className="h-56 w-full mt-6 flex flex-col gap-5">
                  <div className="flex gap-2 items-center justify-center">
                    <ImProfile size={18} color="purple" />
                    <a
                      href="#about"
                      className="md:text-[120%] text-[100%] text-center font-extrabold hover:border-amber-400 hover:border-b-3"
                      style={{
                        fontFamily: "'Architects Daughter', cursive",
                      }}
                      onClick={()=>setOpen(false)}
                    >
                      About
                    </a>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <FaNetworkWired size={18} color="green" />
                    <a
                      href="#projects"
                      className="md:text-[120%] text-[100%] text-center font-extrabold hover:border-amber-400 hover:border-b-3"
                      style={{
                        fontFamily: "'Architects Daughter', cursive",
                      }}
                      onClick={()=>setOpen(false)}
                    >
                      Projects
                    </a>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <LiaChalkboardTeacherSolid size={18} color="blue" />
                    <p
                      className="md:text-[120%] text-[100%] text-center font-extrabold hover:border-amber-400 hover:border-b-3"
                      style={{
                        fontFamily: "'Architects Daughter', cursive",
                      }}
                    >
                      Education
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <GiSkills size={18} color="red" />
                    <p
                      className="md:text-[120%] text-[100%] text-center font-extrabold hover:border-amber-400 hover:border-b-3"
                      style={{
                        fontFamily: "'Architects Daughter', cursive",
                      }}
                    >
                      Skills
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <FaHandsHelping size={18} color="orange" />
                    <p
                      className="md:text-[120%] text-[100%] text-center font-extrabold hover:border-amber-400 hover:border-b-3"
                      style={{
                        fontFamily: "'Architects Daughter', cursive",
                      }}
                    >
                      Connect
                    </p>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
