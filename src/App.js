import {
  Expressjs,
  Golang,
  Laptop,
  MongoDB,
  MongoWithText,
  Nextjs,
  Nodejs,
  Reactjs,
  Collaborations,
  ProblemSolving,
  TimeManagement,
} from "./assets";
import { CardProject, TechStack, Skills } from "./components";
import "./styles/globals.css";

function App() {
  const Icons = [
    {
      name: Reactjs,
      alt: "icon-react",
    },
    {
      name: Nodejs,
      alt: "icon-nodejs",
    },
    {
      name: Expressjs,
      alt: "icon-expressjs",
    },
    {
      name: MongoDB,
      alt: "icon-mongo",
    },
  ];
  return (
    <div className="app">
      <Skills
        images={Collaborations}
        title="Collaborations"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur reprehenderit saepe neque."
      />
      <Skills
        images={TimeManagement}
        title="Time management"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur reprehenderit saepe neque."
        align="content-center"
      />
      <Skills
        images={ProblemSolving}
        title="Problem solving"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur reprehenderit saepe neque."
        align="content-right"
      />
      <CardProject image={Laptop} icons={Icons} title="Litedex blogs" />
      <CardProject image={Laptop} icons={Icons} title="Rest api server" />
      <CardProject image={Laptop} icons={Icons} title="Migrations tools" />
      <CardProject image={Laptop} icons={Icons} title="WhatsApp Clone" />
      <CardProject image={Laptop} icons={Icons} title="Todo apps" />
      <CardProject image={Laptop} icons={Icons} title="Metatrave server" />

      <TechStack isIcon={true} alt="icon-mongo" images={MongoWithText} />
      <TechStack
        isIcon={false}
        alt="icon-next"
        images={Nodejs}
        title="Node.js"
      />
      <TechStack
        isIcon={false}
        alt="icon-next"
        images={Nextjs}
        title="Next.js"
      />
      <TechStack
        isIcon={false}
        alt="icon-next"
        images={Golang}
        title="Golang"
      />
    </div>
  );
}

export default App;
