// COMPONENTS:
import Contacts from "../../components/Contacts/Contacts";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Filter from "../../components/Filter/Filter";
import Section from "../../components/Section/Section";

// MATERIAL UI COMPONENTS:
import Box from "@mui/material/Box";

const Phonebook = () => {
  return (
    <div>
      <Box
        my={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey", bgcolor: " rgb(41, 53, 63)" }}
      >
        <h1>Phonebook</h1>
      </Box>

      <Box
        width="80%"
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "none", m: "auto" }}
      >
        <Section>
          <ErrorBoundary>
            <Contacts />
          </ErrorBoundary>

          <ErrorBoundary>
            <Filter />
          </ErrorBoundary>
        </Section>
      </Box>
    </div>
  );
};

export default Phonebook;
