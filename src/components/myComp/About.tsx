import { FaStar } from "react-icons/fa";
import { Card } from "../retroui/Card";
import TypingText from "../ui/shadcn-io/typing-text";

function About() {
  return (
    <>
      <div id="about" className="max-sm:mt-8 mt-12 border-y-4">
        <div className="w-full max-sm:h-12 h-20 flex gap-2 justify-center items-center bg-[#B7ED79]">
          <FaStar size={40} color="#E979ED" className="max-sm:hidden" />
          <FaStar size={25} color="#EDAF79" />
          <FaStar color="#797DED" />
          <p
            style={{ fontFamily: "'Titan One',sans-serif" }}
            className="md:text-5xl lg:text-5xl sm:text-3xl text-2xl cursor-not-allowed"
          >
            About myself
          </p>
          <FaStar color="#797DED" />
          <FaStar size={25} color="#EDAF79" />
          <FaStar size={40} color="#E979ED" className="max-sm:hidden" />
        </div>
      </div>
      <div className="w-full flex max-sm:flex-col max-sm:mt-8 mt-12 max-sm:items-center">
        <div className="min-w-[400px] flex justify-center max-sm:items-center max-sm:flex-col">
          <Card className="w-[85%] h-[450px] bg-blue-600 rounded-tr-[60px] rounded-bl-[60px] flex items-center justify-center max-sm:scale-90 in-fade cursor-not-allowed sta">
            <img
              src="react.png"
              color="#18A5D9"
              className="absolute h-30 bottom-3.5 -right-10 z-10"
            />
            <img
              src="node.png"
              color="#18A5D9"
              className="absolute h-20 top-3.5 right-15 z-10 rounded-full"
            />
            <img
              src="github.png"
              color="#18A5D9"
              className="absolute h-20 top-24 left-3 z-10"
            />
            <img
              src="android.png"
              color="#18A5D9"
              className="absolute h-20 -top-5 -left-10 z-10"
            />
            <img
              src="js.png"
              color="#18A5D9"
              className="absolute h-20 -bottom-4 -left-5 z-10 rounded-3xl"
            />

            <div className="w-[85%] h-[400px] bg-rose-600 border-0 rounded-tr-[40px] rounded-bl-[40px] flex items-center justify-center in-fade cursor-not-allowed">
              <div className="w-[81%] h-[350px] bg-purple-400 border-0 rounded-tr-[20px] rounded-bl-[20px] overflow-hidden justify-end in-fade cursor-move">
                <img src="my.png" alt="" className="scale-125 bottom-0" />
              </div>
            </div>
          </Card>
        </div>
        <div className="max-sm:w-[80%] w-full flex justify-center items-center">
          <TypingText
            text={[
              `I am a dedicated full-stack developer with strong expertise in React.js, Node.js, Express.js, MongoDB, and MySQL, with a proven ability to build secure, scalable, and responsive web applications. My experience includes developing end-to-end solutions, implementing JWT authentication, designing RESTful APIs, and delivering clean UI using modern frontend tools like Tailwind CSS.  I enjoy solving real-world problems through technology and continuously enhancing my skill set. Alongside web development, I am currently learning React Native to expand my capabilities into cross-platform mobile application development. I am committed to writing efficient code, collaborating effectively in teams, and delivering high-quality user experiences.`,
            ]}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="█"
            startOnVisible
            className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm font-bold"
            textColors={["#17BD13"]}
            variableSpeed={{ min: 10, max: 10 }}
          />
        </div>
      </div>
    </>
  );
}

export default About;
