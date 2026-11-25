import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) =>(
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold flex items-center gap-2 flex-wrap" style={{ margin: 0 }}>
        <span>{experience.company_name}</span>
        {experience.location && (
          <span className="text-[12px] text-[#915eff] bg-[#915eff1a] px-2 py-0.5 rounded-full border border-[#915eff40]">
            {experience.location}
          </span>
        )}
      </p>
    </div>

    {experience.sections ? (
      <div className="mt-5 space-y-5">
        {experience.sections.map((section, sIndex) => (
          <div key={`section-${sIndex}`} className="border-t border-[#2a274c] pt-3 first:border-none first:pt-0">
            <h4 className="text-[#00cea8] text-[15px] font-semibold tracking-wide">
              {section.heading}
            </h4>
            <ul className="mt-2 list-disc ml-5 space-y-2">
              {section.points.map((point, pIndex) => (
                <li
                  key={`sec-point-${pIndex}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider leading-[22px]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider leading-[22px]"
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) =>(
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')