// REDUX:
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

// CUSTOM HOOKS:
import useAuth from "../../hooks/useAuth";

// MATERIAL UI COMPONENTS:
import Button from "@mui/material/Button";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {isLoggedIn ? (
        <Button variant="contained" onClick={handleLogout}>
          Sign out
        </Button>
      ) : null}
    </>
  );
};

export default LogoutButton;
