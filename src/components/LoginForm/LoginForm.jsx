// REDUX:
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

// MATERIAL UI COMPONENTS:
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <Stack spacing={2} direction="column" width="300px">
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

          <Button type="submit" variant="contained" size="medium" >
            Log In
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
