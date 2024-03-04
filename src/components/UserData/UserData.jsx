import { useState } from "react";

// REDUX:
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

// MATERIAL UI COMPONENTS:
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// CUSTOM HOOKS:
import useAuth from "../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#29353f",
  color: "rgb(211, 231, 248)",
  border: "2px solid #1976d2",
  boxShadow: 24,
  p: 7,
};

const UserData = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Button onClick={handleOpen}>User data</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Hello. You are log in as {user.name}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Your personal data:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Name: {user.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Email: {user.email}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ position: "absolute", bottom: "15px", right: "15px" }}
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UserData;
