import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import UploadButton from "../components/UploadButton"


const Experience = () => {
  return (
    <section id="experience" className="pt-20 pb-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-5/6 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-dmserifdisplay font-semibold text-4xl">
            Experience
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="font-dmserifdisplay font-semibold text-2xl">
          <span className="font-bold"> Codology </span>- Software Developer Intern
        </p>
        <p className="mt-1 mb-1 font-poppins">
          MAY 2023 - AUGUST 2023
        </p>
        <p className="mt-1 mb-4 font-poppins">
        Software: MongoDB, NodeJS, Express.js, HTML/CSS <br/>
        Translate project requirements into backend models, ensuring alignment with data structures <br/>
        Implement robust authentication and authorization mechanisms to ensure data security <br/>
        Develop features for seamless video module uploads, ensuring smooth integration with frontend components 
        </p>
        <LineGradient width="w-2/3" />
        <p className="font-dmserifdisplay font-semibold text-2xl mt-4">
          <span className="font-bold"> Feastech Data Corp  </span>— Fullstack Developer Intern
        </p>
        <p className="mt-1 mb-1 font-poppins">
        OCTOBER 2023 - PRESENT
        </p>
        <p className="mt-1 mb-4 font-poppins">
        Software: Azure, SQL, Java, ChatGPT API, Figma <br/>
        Implemented a database system to ensure efficient data storage, retrieval, and management for our clients <br/>
        Leveraged Azure App Service for deploying, managing, and scaling web application to the cloud <br/>
        Integrated ChatGPT as a virtual assistant to optimize resource allocation within the application <br/>
        Worked closely with UI/UX team to implement an intuitive user interface, enhancing user experience <br/>
        Conducted thorough test and debugging sessions with Java 
        </p>
        <LineGradient width="w-2/3" />
        <p className="flex justify-center py-4 font-poppins"> Check out my resume below! </p>
      <UploadButton/>
      </motion.div>
    </section>

  );
};

export default Experience;