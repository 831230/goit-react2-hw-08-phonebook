import { useNavigate } from "react-router-dom";

// CUSTOM HOOKS:
import useAuth from "../../hooks/useAuth";

// MATERIAL UI COMPONENTS:
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// COMPONENTS:
import LogoutButton from "../LogoutButton/LogoutButton";

const Nav = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>
        {!isLoggedIn ? (
          <Button variant="contained" onClick={() => navigate("login")}>
            Sign in
          </Button>
        ) : null}
        {!isLoggedIn ? (
          <Button variant="contained" onClick={() => navigate("register")}>
            Register
          </Button>
        ) : null}
        <LogoutButton />
        <Button variant="contained" onClick={() => navigate("contacts")}>
          Phonebook
        </Button>
      </Stack>
    </>
  );
};

export default Nav;
