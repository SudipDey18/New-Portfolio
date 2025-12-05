import { FaDownload } from "react-icons/fa";
import { Button } from "../retroui/Button";
import { Card } from "../retroui/Card";
import { Dialog } from "../retroui/Dialog";
import { Text } from "../retroui/Text";
import TypingText from "../ui/shadcn-io/typing-text";
import { FaSquareGithub } from "react-icons/fa6";

function ChatAppAbout() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>More About</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:w-[50%] w-full max-w-none h-96">
        <Dialog.Header>
          <Text as="h5">All About Chat App</Text>
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
            <p>React Native</p>
          </Card>
          <Card className="bg-gray-400 w-fit p-2 font-semibold">
            <p>Expo</p>
          </Card>
          <Card className="bg-green-400 w-fit p-2 font-semibold">
            <p>Node.js</p>
          </Card>
          <Card className="bg-purple-400 w-fit p-2 font-semibold">
            <p>Express.js</p>
          </Card>
          <Card className="bg-green-700 w-fit p-2 font-semibold">
            <p>MongoDb</p>
          </Card>
          <Card className="bg-indigo-600 w-fit p-2 font-semibold">
            <p>Socket.io</p>
          </Card>
          <Card className="bg-rose-600 w-fit p-2 font-semibold">
            <p>JWT</p>
          </Card>
          <Card className="bg-yellow-500 w-fit p-2 font-semibold">
            <p>Firebase</p>
          </Card>
          <section className="flex w-full justify-between absolute bottom-10 px-5">
            <Dialog.Trigger asChild>
              <Button
                className="bg-rose-300 hover:bg-rose-400 flex gap-2"
                onClick={() =>
                  window.open("https://sudip-chatapp.zeabur.app/file/chatapp", "_blank")
                }
              >
                <FaDownload />
                Download app
              </Button>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <Button
                className="bg-green-500 hover:bg-green-300 flex gap-2 "
                onClick={() =>
                  window.open("https://github.com/SudipDey18/Chat-App.git", "_blank")
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

export default ChatAppAbout