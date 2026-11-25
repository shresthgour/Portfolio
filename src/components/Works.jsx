import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  isConfidential,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between"
      >
        <div>
          <div className="relative w-full h-[230px] bg-[#100d22] rounded-2xl overflow-hidden border border-[#2c264a]">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1c1538] via-[#151030] to-[#0c091d] rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#915eff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="w-14 h-14 rounded-2xl bg-[#915eff20] border border-[#915eff45] flex items-center justify-center mb-3 relative z-10 shadow-lg">
                  <svg
                    className="w-7 h-7 text-[#00cea8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#00cea8] bg-[#00cea81a] px-3 py-1 rounded-full border border-[#00cea833] relative z-10">
                  Confidential Platform
                </span>
                <p className="text-secondary text-[12px] mt-2 max-w-[240px] relative z-10 leading-[18px]">
                  Enterprise loan platform · Production system & UI protected under client NDA
                </p>
              </div>
            )}

            <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  title="Source Code"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  title="Live Demo"
                  className="bg-[#915eff] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
              {isConfidential && !source_code_link && !live_link && (
                <div
                  title="Confidential Enterprise Platform"
                  className="bg-[#151030e6] backdrop-blur-md border border-[#2c264a] px-3 py-1 rounded-full flex items-center gap-1.5 h-8 text-[11px] text-[#00cea8] font-medium"
                >
                  <svg className="w-3.5 h-3.5 text-[#00cea8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>NDA Protected</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-[22px]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-[#262142]">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects & Client Platforms.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my full stack engineering capabilities,
          spanning production client applications at Eleve Technologies (Finonest,
          Jaypore Murti, Shakti Puja), corporate platforms from BuzzOnEarth, and
          interactive 3D tools like 3D Playground. Each reflects end-to-end
          problem-solving, config-driven development, and scalable architecture.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
