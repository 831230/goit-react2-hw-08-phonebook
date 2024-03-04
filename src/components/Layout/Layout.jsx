import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS:
import Nav from "../Nav/Nav";
import UserGreeting from "../UserGreeting/UserGreeting";

// MATERIAL UI COMPONENTS:
import Stack from "@mui/material/Stack";

const Layout = () => {
  return (
    <>
      <header>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          padding={1}
          spacing={2}
        >
          <Nav />
          <UserGreeting />
        </Stack>
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
