import { Routes, Route } from "react-router-dom";

// COMPONENTS
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Phonebook from "./pages/Phonebook/Phonebook";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotExist from "./components/NotExist/NotExist";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<PrivateRoute Component={<LoginPage/>} redirectTo="/contacts"/>}/>
          <Route path="/register" element={<PrivateRoute Component={<RegisterPage/>} redirectTo="/contacts"/>}/>
          <Route path="/contacts" element={<ProtectedRoute Component={<Phonebook/>} redirectTo="/login"/>}/>
          <Route path="*" element={<NotExist/>}/>
        </Route>
      </Routes>
    </>
  );
};
 
export default App;
