import PropTypes from "prop-types";

const ContactList = ({ children }) => {
  return (
    <div>
      <h3>Contacs list:</h3>
      <ul>{children}</ul>
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.object,
};

export default ContactList;
