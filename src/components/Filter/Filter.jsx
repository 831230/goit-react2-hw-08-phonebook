import { useSelector, useDispatch } from "react-redux";

// REDUX:
import {
  selectContacts,
  selectFilter,
  selectError,
} from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { removeContact } from "../../redux/operations";

// MATERIAL UI COMPONENTS:
import TextField from "@mui/material/TextField";

// COMPONENTS
import ContactList from "../ContactList/ContactList";
import ContactListItem from "../ContactListItem/ContactListItem";
import FetchErrorView from "../FetchErrorView/FetchErrorView";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
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
    <div>
      <h4>Find contacts by name:</h4>
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        name="filter"
        autoComplete="off"
        sx={{
          bgcolor: "rgb(41, 53, 63)",
          input: { color: "aliceblue" },
          label: { color: "aliceblue" },
        }}
        onChange={handleFilter}
        value={filter}
      />
      <ContactList>
        {error && <FetchErrorView />}
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
