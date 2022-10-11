import React from "react";
import {
  AdcomHomePages,
  AdcomServer,
  AlphadevCms,
  ChallengeQwars,
  Css,
  EJS,
  Expressjs,
  Figma,
  Html,
  Javascript,
  Metatrave,
  MongoDB,
  Nodejs,
  PersonalBranding,
  PortfolioWebsite,
  PostgreSQL,
  Reactjs,
  RestApi,
  SocialLinks,
  StrapiIcon,
  Tailwindcss,
  TodoList,
  TodoVanilaJs,
  WhatsappClone,
} from "../../assets/svg";
import { CardProject } from "../moleculs";

const Projects = () => {
  const icons = [
    {
      portfolio: [
        {
          name: Figma,
          alt: "figma",
        },
        {
          name: Reactjs,
          alt: "reactjs",
        },
        {
          name: Css,
          alt: "Css",
        },
      ],
      whatsapp_clone: [
        {
          name: Tailwindcss,
          alt: "Tailwindcss",
        },
        {
          name: Figma,
          alt: "figma",
        },
        {
          name: Reactjs,
          alt: "reactjs",
        },
      ],
      metatrave: [
        {
          name: Figma,
          alt: "figma",
        },
        {
          name: Reactjs,
          alt: "reactjs",
        },
      ],
      strapi: [
        {
          name: Figma,
          alt: "figma",
        },
        {
          name: StrapiIcon,
          alt: "StrapiIcon",
        },
        {
          name: MongoDB,
          alt: "mongodb",
        },
      ],
      rest_api: [
        {
          name: Expressjs,
          alt: "expressjs",
        },
        {
          name: MongoDB,
          alt: "mongodb",
        },

        {
          name: Nodejs,
          alt: "nodejs",
        },
      ],
      adcom_server: [
        {
          name: EJS,
          alt: "EJS",
        },
        {
          name: Expressjs,
          alt: "expressjs",
        },
        {
          name: MongoDB,
          alt: "mongodb",
        },

        {
          name: Nodejs,
          alt: "nodejs",
        },
      ],
      todo_app: [
        {
          name: Tailwindcss,
          alt: "Tailwindcss",
        },
        {
          name: PostgreSQL,
          alt: "postgres",
        },

        {
          name: Nodejs,
          alt: "nodejs",
        },
        {
          name: Reactjs,
          alt: "reactjs",
        },
      ],
      todo_vanila: [
        {
          name: Javascript,
          alt: "Javascript",
        },
        {
          name: Html,
          alt: "Html",
        },

        {
          name: Css,
          alt: "Css",
        },
      ],
      challenge_qwars: [
        {
          name: Javascript,
          alt: "Javascript",
        },
        {
          name: Html,
          alt: "Html",
        },

        {
          name: Css,
          alt: "Css",
        },
      ],
      social_links: [
        {
          name: Tailwindcss,
          alt: "Tailwindcss",
        },
        {
          name: Figma,
          alt: "figma",
        },
        {
          name: Reactjs,
          alt: "reactjs",
        },
      ],
    },
  ];
  return (
    <section className="projects-section" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-contain">
        <CardProject
          image={PortfolioWebsite}
          icons={icons[0].portfolio}
          alt="images"
          title="Portfolio websites"
          description="Personal portfolio website to inform a short information about my self, created by muhamad firly ramadan with technologies reactjs and css native."
          link="https://mframadann-uts.vercel.app"
        />
        <CardProject
          image={WhatsappClone}
          icons={icons[0].whatsapp_clone}
          alt="images"
          title="Whatsapp UI clone"
          description="Personal portfolio website to inform a short information about my self, created by muhamad firly ramadan with technologies reactjs and css native "
          link="https://whatsapp-clone-mframadann.vercel.app"
        />
        <CardProject
          image={RestApi}
          icons={icons[0].rest_api}
          alt="images"
          title="Rest api server"
          description="Rest application programming interfaces (API) services used from handling request from the client in alphadev blogs pages. created by muhamad firly ramadan  "
          link="https://blogs.alphadev.biz.id"
        />
      </div>
      <div className="projects-contain">
        <CardProject
          image={TodoList}
          icons={icons[0].todo_app}
          alt="images"
          title="Todo list application"
          description="This todo list application was created to help me record what things I want to do. created widh technologies react.js, node.js, expressjs and postgreSQL. "
          link="https://todo-app-mframadann.vercel.app/note"
        />
        <CardProject
          image={TodoVanilaJs}
          icons={icons[0].todo_vanila}
          alt="images"
          title="Todo app vanila js"
          description="Todo application with vanila html, css and javascript without library or framework and databases, this application using localstorage manipulation. "
          link="https://ramadandev.github.io/todo-list-vanila-css-js/"
        />

        <CardProject
          image={SocialLinks}
          icons={icons[0].social_links}
          alt="images"
          title="Social links website"
          description="Social links website, created by muhamad firly ramadan with technologies tailwindcss, react.js, and figma for UI design and react-particles library for moleculs effect."
          link="https://mframadann.vercel.app"
        />
      </div>
      <div className="projects-contain">
        <CardProject
          image={AdcomServer}
          icons={icons[0].adcom_server}
          alt="images"
          title="Adcom web server"
          description="Android developer comunity web server is used for management content at homepage website. created by muhamad firly ramadan at may ,12 2022"
          link="https://adcom-staging.herokuapp.com/set/login"
        />
        <CardProject
          image={ChallengeQwars}
          icons={icons[0].challenge_qwars}
          alt="images"
          title="Challenge qwars"
          description="Qwars a platform for learning, create question and answer questions for other students. besides that qwars also provides interesting challenges to hone skills"
          link="https://ramadandev.github.io/pweb/"
        />
        <CardProject
          image={AdcomHomePages}
          icons={icons[0].adcom_server}
          alt="images"
          title="Adcom website"
          description="Remake android developer comunity cirebon from static site to dynamic websites, created with technologies nodejs, expressjs, mongoDB and ejs view engine. "
          link="https://adcom-staging.herokuapp.com"
        />
      </div>
      <div className="projects-contain">
        <CardProject
          image={AlphadevCms}
          icons={icons[0].adcom_server}
          alt="images"
          title="Alphadev blog server"
          description="Alphadev is a new software house are focussed on UI/UX design, graphic design, web development and mobile apps development."
          link="private"
        />
        <CardProject
          image={Metatrave}
          icons={icons[0].metatrave}
          alt="images"
          title="Metatrave mockup"
          description="Metatrave is a service engaged in the tourism industry, especially the Cirebon area. this idea was created by alphadev team in january 2022"
          link="private"
        />
        <CardProject
          image={PersonalBranding}
          icons={icons[0].strapi}
          alt="images"
          title="PB web server"
          description="Personal branding server are used for management content in personal branding homepages, own by alphadev and created by muhamad firly ramadan."
          link="private"
        />
      </div>
    </section>
  );
};

export default Projects;
