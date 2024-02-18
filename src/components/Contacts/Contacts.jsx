import { useSelector, useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { addContact } from "../../redux/contactsSlice";
import { clearFilter } from "../../redux/filterSlice";

import ContactForm from "../ContactForm/ContactForm";

const Contacts = () => {
  const contacts = useSelector((state) => {
    return state.contacts;
  });

  const dispatch = useDispatch();

  const handleAddContact = (evt) => {
    evt.preventDefault();
    const valueName = evt.currentTarget.elements.name.value;
    const valueNumber = evt.currentTarget.elements.number.value;
    if (contacts.some((el) => el.name === valueName)) {
      Notiflix.Notify.warning(`${valueName} is already in contacts`);
    } else {
      dispatch(addContact(valueName, valueNumber));
      dispatch(clearFilter(""));
      evt.currentTarget.elements.name.value = "";
      evt.currentTarget.elements.number.value = "";
    }
  };

  return (
    <>
      <h2>Add contact</h2>
      <ContactForm handleAddContact={handleAddContact} />
    </>
  );
};

export default Contacts;
