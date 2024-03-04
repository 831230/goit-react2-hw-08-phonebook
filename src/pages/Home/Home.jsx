import { Link } from "react-router-dom";

// CUSTOM HOOKS:
import useAuth from "../../hooks/useAuth";

// MATERIAL UI COMPONENTS:
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <Box
        height={400}
        my={4}
        letterSpacing="0.2rem"
        display="flex"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        gap={4}
        p={10}
        sx={{ border: "1px solid grey", bgcolor: " rgb(41, 53, 63)" }}
      >
        {!isLoggedIn && (
          <div>
            <h1>Welcome in the phone book application.</h1>
            <h2>To access the functionality, log in.</h2>
            <h2>If you don&#39;t have an account, go to registration</h2>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <h1>Welcome {user.name} in the phone book application.</h1>
            <h2>
              You are logged in. Go to the{" "}
              <Button
                component={Link}
                to="/contacts"
                variant="contained"
                color="primary"
              >
                Phonebook
              </Button>{" "}
              to work with your contacts.
            </h2>
          </div>
        )}
      </Box>
    </>
  );
};

export default Home;
