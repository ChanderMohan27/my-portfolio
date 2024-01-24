import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/background.jpeg";
import SocialIcons from "./SocialIcons";

/**
 * Represents the hero section of the page.
 *
 * @component
 * @param {string} name - The name to be displayed in the hero section.

 */

const Hero = ({ name }) => {
  // Styles for various elements
  const styles = {
    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },
    

  
    quote: {
      fontFamily: "Bleu Fumee", // Replace "YourChosenFont" with the desired font
      fontSize: "18px", // Adjust the font size as needed
      //marginTop: "px", // Add some space between description and quote
      fontStyle: "italic", // Make it italic for a quote-like appearance
      lineHeight: "1.4", // Adjust line height for better readability
    },
    author: {
      fontFamily: "Bleu Fumee",
      fontSize: "16px", // Adjust the font size for the author's name
      marginTop: "8px", // Add space between quote and author's name
      fontWeight: "bold",
      textAlign: "right",
      color: "#87AFC7" // Make the author's name bold for emphasis
    },
  };
  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        {/* Animated name */}
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>
        {/* Animated description */}
        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Typewriter effect for dynamic text animation without a cursor */}
          <Typewriter 
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Data Science Professional").start();
            }}
          />
        </motion.div>
        <br />
        <motion.div
        className="quote"
        style={styles.quote}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {/* Add your data science quote here */}
        <p className="quote-text">
          "Data Scientist: Person who is better at statistics than any software engineer and better at software engineering than any statistician."
        </p>
      </motion.div>
      <motion.div className="author" style={styles.author}>
      {/* ~ Josh Wills, data scientist and engineer */}
      ~ Josh Wills
      </motion.div>
      </div>
      {/* Animated landing image */}
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Chander Mohan"
        />
      </div>
      {/* Displaying social icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;
