import { GiBrain } from "react-icons/gi";
import { Card } from "../../components/retroui/Card";
import { Backend, DB, Frontend, Tools } from "../../../export.data"

function Skills() {
    return (
        <>
            <div id="skills" className="max-sm:mt-8 border-b-4">
                <div className="w-full max-sm:h-12 h-20 flex gap-2 justify-center items-center bg-[#f79374]">
                    <GiBrain size={40} color="#09b512" className="max-sm:hidden" />
                    <GiBrain size={25} color="#ff2056" />
                    <GiBrain color="#797DED" />
                    <p
                        style={{ fontFamily: "'Titan One',sans-serif" }}
                        className="md:text-5xl lg:text-5xl sm:text-3xl text-2xl cursor-not-allowed"
                    >
                        Skills
                    </p>
                    <GiBrain color="#797DED" />
                    <GiBrain size={25} color="#ff2056" />
                    <GiBrain size={40} color="#09b512" className="max-sm:hidden" />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Card className="w-[60%] bg-indigo-400 flex flex-wrap max-sm:w-[90%]">
                    <Card.Header>
                        <Card.Title>Frontend</Card.Title>
                    </Card.Header>
                    <Card.Content className="flex flex-wrap gap-4 w-full">
                        {Frontend.map((item) => (
                            < Card className="w-fit p-2 font-semibold shadow-none hover:scale-110 in-fade-all" style={{ backgroundColor: item.color }} >
                                <p>{item.name}</p>
                            </Card>
                        ))}
                    </Card.Content>

                    <Card.Header>
                        <Card.Title>Backend</Card.Title>
                    </Card.Header>
                    <Card.Content className="flex flex-wrap gap-4 w-full">
                        {Backend.map((item) => (
                            < Card className="w-fit p-2 font-semibold shadow-none hover:scale-110 in-fade-all" style={{ backgroundColor: item.color }} >
                                <p>{item.name}</p>
                            </Card>
                        ))}
                    </Card.Content>

                    <Card.Header>
                        <Card.Title>Database</Card.Title>
                    </Card.Header>
                    <Card.Content className="flex flex-wrap gap-4 w-full">
                        {DB.map((item) => (
                            < Card className="w-fit p-2 font-semibold shadow-none hover:scale-110 in-fade-all" style={{ backgroundColor: item.color }} >
                                <p>{item.name}</p>
                            </Card>
                        ))}
                    </Card.Content>

                    <Card.Header>
                        <Card.Title>Tools</Card.Title>
                    </Card.Header>
                    <Card.Content className="flex flex-wrap gap-4 w-full">
                        {Tools.map((item) => (
                            < Card className="w-fit p-2 font-semibold shadow-none hover:scale-110 in-fade-all" style={{ backgroundColor: item.color }} >
                                <p>{item.name}</p>
                            </Card>
                        ))}
                    </Card.Content>
                </Card>
            </div >
        </>
    )
}

export default Skills