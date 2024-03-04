import PropTypes from "prop-types";

// COMPONENTS:
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// MATERIAL UI COMPONENTS:
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

const ContactListItem = ({ contacts, filter, removeContact }) => {
  const contactsList = contacts.map((el) => {
    if (el.name.toLowerCase().includes(filter.toLowerCase())) {
      return (
        <ListItem
          key={el.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              sx={{ color: "#ff0000b8", bgcolor: "#29353f" }}
              onClick={() => removeContact(el.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            sx={{
              paddingX: "15px",
              borderLeft: "solid 5px #1976d2",
              letterSpacing: "0.1rem",
              fontSize: "18px",
            }}
            disableTypography
            primary={el.name}
            secondary={
              <Typography
                variant="body1"
                style={{
                  color: "#f4f4f4de",
                  letterSpacing: "0.1rem",
                  fontSize: "14px",
                }}
              >
                {el.number}
              </Typography>
            }
          />
        </ListItem>
      );
    } else {
      return null;
    }
  });

  return <List>{contactsList}</List>;
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  removeContact: PropTypes.func,
};

export default ContactListItem;
