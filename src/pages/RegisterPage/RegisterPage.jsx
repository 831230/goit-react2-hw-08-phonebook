// COMPONENTS:
import RegisterForm from "../../components/RegisterForm/RegisterForm";

// MATERIAL UI COMPONENTS:
import { Box } from "@mui/material";

const RegisterPage = () => {
  return (
    <>
      <Box
        my={4}
        letterSpacing="0.2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        gap={4}
        p={10}
        sx={{ border: "2px solid grey", bgcolor: " rgb(41, 53, 63)" }}
      >
        <h2>Please enter your name, email and password to register</h2>
        <RegisterForm />
      </Box>
    </>
  );
};

export default RegisterPage;
