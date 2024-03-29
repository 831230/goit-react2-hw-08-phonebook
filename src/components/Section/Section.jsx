import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <section className="container">{children}</section>;
};

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Section;
