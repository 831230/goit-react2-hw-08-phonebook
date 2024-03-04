// COMPONENTS:
import LoginForm from "../../components/LoginForm/LoginForm";

// MATERIAL UI COMPONENTS:
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Box
        height={400}
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
        <h2>Please enter your email and password to log in</h2>
        <LoginForm />
      </Box>
    </>
  );
};

export default LoginPage;
