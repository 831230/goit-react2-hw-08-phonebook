import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { removeContact } from "../../redux/contactsSlice";

// COMPONENTS
import ContactList from "../ContactList/ContactList";
import ContactListItem from "../ContactListItem/ContactListItem";

const Filter = () => {
  const filter = useSelector((state) => {
    return state.filter;
  });

  // const contacts = useSelector((state) => {
  //   return state.contacts;
  // });
  const contacts = useSelector(selectContacts)

  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    const filterValue = evt.target.value;
    dispatch(setFilter({ filter: filterValue }));
  };

  const handleRemoveContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(removeContact(newContacts));
  };

  return (
    <div className="filter-container">
      <p>Find contacts by name:</p>
      <input type="text" name="filter" onChange={handleFilter} value={filter} />
      <ContactList>
        <ContactListItem
          contacts={contacts}
          filter={filter}
          removeContact={handleRemoveContact}
        />
      </ContactList>
    </div>
  );
};

export default Filter;
