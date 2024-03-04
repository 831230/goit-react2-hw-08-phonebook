import PropTypes from "prop-types";

// MATERIAL UI COMPONENTS:
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ContactForm = ({ handleAddContact }) => {
  return (
    <form onSubmit={handleAddContact}>
      <Stack spacing={2} direction="column">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          autoComplete="off"
          sx={{
            bgcolor: "rgb(41, 53, 63)",
            input: { color: "aliceblue" },
            label: { color: "aliceblue" },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          name="number"
          autoComplete="off"
          sx={{
            bgcolor: "rgb(41, 53, 63)",
            input: { color: "aliceblue" },
            label: { color: "aliceblue" },
          }}
        />

        <Button type="submit" variant="contained" size="small">
          Add contact
        </Button>
      </Stack>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};

export default ContactForm;
