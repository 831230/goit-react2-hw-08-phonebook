import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import Notiflix from "notiflix";

// REDUX:
import { fetchContacts, addContact } from "../../redux/operations";
import { clearFilter } from "../../redux/filterSlice";

// COMPONENTS:
import ContactForm from "../ContactForm/ContactForm";

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleAddContact = (evt) => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    if (contacts.some((el) => el.name === name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      dispatch(clearFilter(""));
      evt.currentTarget.elements.name.value = "";
      evt.currentTarget.elements.number.value = "";
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2>Add contact</h2>
      <ContactForm handleAddContact={handleAddContact} />
    </>
  );
};

export default Contacts;
