import { FaVideo } from "react-icons/fa";
import { Button } from "../retroui/Button";
import { Card } from "../retroui/Card";
import { Dialog } from "../retroui/Dialog";
import { Text } from "../retroui/Text";
import TypingText from "../ui/shadcn-io/typing-text";
import { FaSquareGithub } from "react-icons/fa6";

function WpAbout() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>More About</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:w-[50%] w-full max-w-none h-96">
        <Dialog.Header>
          <Text as="h5">All About Whatsapp AI Bot</Text>
        </Dialog.Header>
        <TypingText
          text={["Technology Used:"]}
          style={{ fontFamily: "'Kaushan Script', cursive" }}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="ml-2 text-2xl font-bold border-b-2 border-orange-500 w-fit"
          textColors={["oklch(70.5% 0.213 47.604)"]}
          variableSpeed={{ min: 100, max: 200 }}
        />
        <section className="flex flex-wrap justify-evenly gap-6 p-4">
          <Card className="bg-blue-400 w-fit p-2 font-semibold">
            <p>whatsapp-web.js</p>
          </Card>
          <Card className="bg-yellow-400 w-fit p-2 font-semibold">
            <p>puppeteer</p>
          </Card>
          <Card className="bg-green-400 w-fit p-2 font-semibold">
            <p>Node.js</p>
          </Card>
          <Card className="bg-purple-400 w-fit p-2 font-semibold">
            <p>Express.js</p>
          </Card>
          <Card className="bg-indigo-600 w-fit p-2 font-semibold">
            <p>OpenRouter AI</p>
          </Card>
          <section className="flex w-full justify-between absolute bottom-10 px-5">
            <Dialog.Trigger asChild>
              <Button
                className="bg-blue-400 hover:bg-blue-300 flex gap-2"
                onClick={() =>
                  window.open("https://www.linkedin.com/posts/sudip-dey-2564b2326_whatsapp-puppeteer-openrouter-ugcPost-7352191467622166528-JPsJ?utm_source=share&utm_medium=member_android&rcm=ACoAAFJMmeIBw7IN6k7w0b_vbVxWLl7Z52qsVxs", "_blank")
                }
              >
                <FaVideo />
                View Video
              </Button>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <Button
                className="bg-green-500 hover:bg-green-300 flex gap-2 "
                onClick={() =>
                  window.open("https://github.com/SudipDey18/Whatsapp-Chat-bot-With-Ai", "_blank")
                }
              >
                <FaSquareGithub />
                Github
              </Button>
            </Dialog.Trigger>
          </section>
        </section>
      </Dialog.Content>
    </Dialog>
  );
}

export default WpAbout;
