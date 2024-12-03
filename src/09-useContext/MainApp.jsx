import { Navigate, Route, Routes } from "react-router";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>

      <Navbar/>
      
      <h1 className="mt-4">MainApp</h1>

      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/about" element={ <AboutPage /> } />

        <Route path="/*" element={ <Navigate to="/about"/> } />
      </Routes>

    </UserProvider>
  );
};
 
export default MainApp;
