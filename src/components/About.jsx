import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Software Developer passionate about building modern, secure applications with Nuxt.js, TypeScript, and React. I specialize in Full Stack Development, System Migrations, and Audit-focused Solutions. I've built Ecommerce platforms, Financial apps, and Mobile experiences, always focusing on efficiency and user experience. I love solving complex problems and transforming legacy systems into cutting-edge solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Centered Resume Button */}
      <div className="mt-16 flex justify-center">
        <motion.a
          href="/josh-gamiao-portfolio/Joshua%20Gamiao%20-%20Resume.pdf"
          download="Joshua_Gamiao_Resume.pdf"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#915EFF] rounded-lg shadow-md hover:bg-[#7347CC] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
