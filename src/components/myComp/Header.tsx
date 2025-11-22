import TypingText from "../ui/shadcn-io/typing-text";

function Header() {
  return (
    <>
      <div className="w-full max-sm:mt-16 mt-28 flex max-sm:items-center max-sm:flex-col flex-row-reverse justify-center items-center max-sm:gap-6 gap-[6%]">
        <div className="max-sm:w-[80%] w-[45%] h-fit">
          <img src="/laptop.png" alt="/laptop.png" />
        </div>
        <div className="max-sm:w-[80%] w-[42%] flex">
          <TypingText
            text={[
              "Hi, I am Sudip",
              "I am Full Stack Developer",
              "I am available for job",
            ]}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="█"
            className="md:text-5xl lg:text-5xl sm:text-3xl text-2xl font-bold"
            textColors={["#7DED79", "#ED797D", "#797DED"]}
            variableSpeed={{ min: 100, max: 200 }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
