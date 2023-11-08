import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-dmserifdisplay font-semibold text-4xl mb-5">
            MY <span className="text-orange">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-poppins">
          I bring a versatile skill set that combines technical expertise with a passion for creating seamless and engaging digital experiences. 
          From front-end to back-end, my proficiency spans the entire development spectrum. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 sm:max-h-[200px] sm:min-w-[547px] object-fit: cover;"
                src={require("../assets/skills-image.JPG")}
              />
            </div>
          ) : (
            <img
            alt="skills"
            className="z-10 sm:max-h-[177x] sm:min-w-[478px] object-fit: cover;"
            src={require("../assets/skills-image.JPG")}
          />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl">01</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3">
                Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins">
          ⦿ Microsoft Azure ⦿ Digital Ocean ⦿ Flask ⦿ React.js ⦿ Node.js ⦿ 
          Express.js ⦿ Tailwind CSS ⦿ Bootstrap ⦿  Figma ⦿ Github ⦿ VSCode ⦿ Microsoft Excel ⦿
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl">02</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3">
                Program Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins">
          ⦿ HTML ⦿ CSS ⦿ Java ⦿ Python ⦿ Javascript ⦿ C++ ⦿ MongoDB ⦿ SQL
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl">03</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3">
                Soft Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins">
          ⦿ Communication ⦿ Leadership ⦿ Organization ⦿ Problem Solving ⦿
          Native proficiency in English ⦿ Professional fluency in written and oral Japanese ⦿ Conversational Vietnamese ⦿
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
