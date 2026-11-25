import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Arsenal</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      {/* 3D Interactive Balls */}
      <div className="mt-14 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Comprehensive Categorized Skills from Resume */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((cat, index) => (
          <div
            key={cat.title}
            className="bg-tertiary p-6 rounded-2xl border border-[#2b274c] shadow-card hover:border-[#915eff66] transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00cea8]" />
              <h3 className="text-white font-bold text-[18px] tracking-wide">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] font-medium px-3 py-1.5 rounded-lg bg-[#151030] text-secondary border border-[#3b3464] hover:text-white hover:border-[#915eff] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
