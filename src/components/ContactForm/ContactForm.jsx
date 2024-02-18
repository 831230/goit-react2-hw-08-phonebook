import PropTypes from "prop-types";

const ContactForm = ({ handleAddContact }) => {
  return (
    <form onSubmit={handleAddContact}>
      <label htmlFor="name_form">
        <p>Name</p>
        <input id="name_form" type="text" name="name" required />
      </label>
      <label htmlFor="number_form">
        <p>Number</p>
        <input id="number_form" type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};

export default ContactForm;
