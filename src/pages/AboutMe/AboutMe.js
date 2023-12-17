import PageHeader from "../../components/PageHeader";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";

/**
 *
 * @component
 * @param {string} name - The name of the contact person.
 */

const AboutMeinfo = ({ name }) => {
  return (
    <>
      {/* Main Contact Page */}
      <main className="contact container">
        {/* Display the page header */}
        <PageHeader title="About Me" description="Journey towards Data Science" />
        <div className="about-me-content container">
          <AboutMe name={name} />
        </div>
        
        
      </main>
      <Footer />
    </>
  );
};

export default AboutMeinfo;
