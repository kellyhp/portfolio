import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const link = url;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div onClick={() => window.open( link, "_blank")} className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 font-poppins">
         {text}
        </p>
      </div>
      <img className="min-w-[400px] min-h-[400px]" src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-dmserifdisplay font-semibold text-4xl text-orange">
            PROJECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-poppins">
        From conceptualization to execution, these projects reflect my passion for 
        building intuitive and impactful digital solutions.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-16 bg-green
              max-w-[400px] max-h-[400px]">
          </div> */}
          <Project url="https://github.com/kellyhp/cookbook" title="Cookbook" text=" This project was is a react app of a cookbook website consisting of multiple cuisines w/ 
          recipies included. It is a front-end application that utilizes 'react-router-dom' for routing and reusuable cards."/>
          <Project url = "https://github.com/kellyhp/weather_app" title="Weather App" text=" This project is a react application of a weather app taken from https://openweathermap.org's API. 
          It displays an image and search bar on the left hand side and the current forecast along with the upcoming day ahead on the right hand side. 
          This weather app uses React useState for state management, react-icons for styling, moment for parsing data objects, and environment variables."/>
          <Project title="Boheme Redesign" text=" yuh"/>
          <Project url = "https://devpost.com/software/smiskify?ref_content=my-projects-tab&ref_feature=my_projects" title="Spotify Personality Visualizer" text=" The web application uses the Spotify API to analyze your top songs of the last 6 months 
          to determine what personality-based Smiski matches your music taste! Intaking the song attributes of your top listens, we assign you a Smiski based 
          on your most defining feature from your music. It is our unique approach to building a data visualizer from Spotify."/>

          {/* ROW 2 */}
          {/* <Project title="Project 4" text=" Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt."/>
          <Project title="Project 5" text=" Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt."/> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" text=" Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt."/>
          <Project title="Project 7" text=" Sheep"/> */}
          {/* <div
            className="flex justify-center text-center items-center p-16 bg-blue
              max-w-[400px] max-h-[400px]">
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;