import PropTypes from 'prop-types';

const ContactListItem = ({ contacts, filter, removeContact }) => {

  const contactsList = contacts.map((el) => {
    if(el.name.toLowerCase().includes(filter.toLowerCase())){
    return(
    <li key={el.id}>
      <span>{el.name}: </span>
      <span>{el.number}</span>
      <button onClick={() => removeContact(el.id)}>usuń</button>
    </li>
  )  
    }else{
      return null
    }
  }
  );

  return <>{contactsList}</>;
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  removeContact: PropTypes.func
};

export default ContactListItem;
