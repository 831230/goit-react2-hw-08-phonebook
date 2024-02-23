import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilter, selectError } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { removeContact } from "../../redux/operations";

// COMPONENTS
import ContactList from "../ContactList/ContactList";
import ContactListItem from "../ContactListItem/ContactListItem";
import FetchErrorView from "../FetchErrorView/FetchErrorView";

const Filter = () => {
  const filter = useSelector(selectFilter) 
  const contacts = useSelector(selectContacts)
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    const filterValue = evt.target.value;
    dispatch(setFilter({ filter: filterValue }));
  };

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div className="filter-container">
      <p>Find contacts by name:</p>
      <input type="text" name="filter" onChange={handleFilter} value={filter} />
      <ContactList>
        {error && <FetchErrorView/>}
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
