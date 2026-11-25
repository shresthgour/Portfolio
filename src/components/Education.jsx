import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";

const EducationCard = ({ index, degree, institution, date, description }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)} className="w-full sm:w-[48%]">
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-8 rounded-2xl border border-[#2b274c] shadow-card hover:border-[#915eff88] transition-all h-full flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-xl bg-[#915eff26] border border-[#915eff55] flex items-center justify-center text-2xl">
              🎓
            </div>
            <span className="text-[13px] font-semibold text-[#00cea8] bg-[#00cea81a] px-3 py-1 rounded-full border border-[#00cea840]">
              {date}
            </span>
          </div>

          <div className="mt-5">
            <h3 className="text-white text-[22px] font-bold">{degree}</h3>
            <p className="text-[#915eff] text-[16px] font-semibold mt-1">
              {institution}
            </p>
            <p className="text-secondary text-[14px] mt-4 leading-[24px]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#2a274c] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#915eff]" />
          <span className="text-xs text-white-100 font-medium">Jaipur, Rajasthan</span>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-8 justify-between">
        {educations.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
