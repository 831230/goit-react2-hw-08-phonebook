import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Container fixed >
          <Box sx={{ bgcolor: "rgb(23, 30, 36)", color: "rgb(211, 231, 248)",  minHeight: '100vh' }}>
            <App />
          </Box>
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
); 
