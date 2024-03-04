// REDUX:
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

// MATERIAL UI COMPONENTS:
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegister = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <Stack spacing={2} direction="column" width="300px">
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
            label="Email"
            variant="outlined"
            name="email"
            autoComplete="off"
            sx={{
              bgcolor: "rgb(41, 53, 63)",
              input: { color: "aliceblue" },
              label: { color: "aliceblue" },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            autoComplete="off"
            width="200px"
            sx={{
              bgcolor: "rgb(41, 53, 63)",
              input: { color: "aliceblue" },
              label: { color: "aliceblue" },
            }}
          />

          <Button type="submit" variant="contained" size="medium">
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RegisterForm;
