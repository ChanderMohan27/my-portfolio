import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 
 *
 * @component
 * @param {string} Chander - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about"  >
      <div className="aboutContainer container" style={{ maxWidth: '3000px', padding: '10px' }}>
        <div className="row">
          <motion.div
            className="personalImage col-1 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>A motivatived Data Science Professional</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I’m a Data Science professional who recently earned a <span style={{ color: "var(--hl-color)" }}> Master of Data Science</span> degree from <span style={{ color: "var(--hl-color)" }}> RMIT University</span>. My journey towards the world of Data Science began with a strong interest in mathematics. 

                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                During my undergraduate years, I developed a strong interest in mathematics and statistics, leading me to pursue a <span style={{ color: "var(--hl-color)" }}> Bachelor's degree in Mathematics (Honors) </span>. In my Bachelor's, I studied some computer science-related subjects that attracted my attention towards Data Science and I got to know how computer programming and algorithms connected with Mathematics. And the idea of extracting meaningful insights from data using mathematical principles fascinates me. And then during my final year of graduation, I started to explore more about Data Science through online courses and youtube videos that build a strong interest towards Data Science. 

                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                To deepen my understanding, I enrolled in a Master's program in Data Science and today, I stand as a <span style={{ color: "var(--hl-color)" }}>proud graduate </span>with a strong foundation in coding, data visualization, statistical analysis, and machine learning techniques. In my master’s, I learnt different tools and techniques that needed to extract meaningful insights from data, and make <span style={{ color: "var(--hl-color)" }}>data-driven decisions</span>. 
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                I believe that Data Science is a journey involving the <span style={{ color: "var(--hl-color)" }}>life cycle of data</span> with several stages. It all begins with the collection of data from various sources. Once collected, the data undergoes preprocessing to clean and prepare it for analysis.  After the analysis phase, we prepared data to feed it into machine learning models. This is where the magic happens. These models empower us to make informed <span style={{ color: "var(--hl-color)" }}>decisions and extract valuable information</span> from the data.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Today, I've acquired a strong foundation in Data Science, driven by my enduring passion for mathematics. My Master's education has provided me with the essential skills required to transform data into actionable insights.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Let's take this data-driven adventure together and make a real impact!
                </motion.p>
                <br />
                
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
