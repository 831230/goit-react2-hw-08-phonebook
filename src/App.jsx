// COMPONENTS
import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <Section>
        <ErrorBoundary>
          <Contacts />
        </ErrorBoundary>

        <ErrorBoundary>
          <Filter />
        </ErrorBoundary>
      </Section>
    </div>
  );
};

export default App;
