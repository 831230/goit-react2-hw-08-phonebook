// SET CONTACT TO LOCALE STORAGE
export const setContactToLocaleStorage = (data) => {
  localStorage.setItem("contacts", JSON.stringify(data));
};

// GET CONTACTS WITH LOCALE STORAGE
export const getContactWithLocaleStorage = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  if (contacts) {
    return contacts;
  } else {
    localStorage.setItem("contacts", JSON.stringify([]))
    return [];
  }
};