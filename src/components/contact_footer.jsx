import { useEffect } from "react";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footerr = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information
  

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("https://api.github.com/repos/mdyeates/my-portfolio")
      .then((res) => res.json())
      .then((json) => {
        
        
      })
      .catch((e) => console.error(e));
  }, []);

  // Variants for button animation
  

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/mdyeates/my-portfolio">
    
        <p>
          <span>▷</span> Template by Michael Yeates &copy; {currentYear}
        </p>
        
      </a>

     
      
        
        
      
    </footer>
  );
};

export default Footerr;