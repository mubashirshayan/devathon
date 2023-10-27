import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
 import Register from "../pages/register";
import Login from "../pages/login";
import Chat from "../pages/chat";
import Signup from "../pages/signup";
import Log from "../pages/asset";
// import Signup from "../pages/signup";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/asset" element={<Log/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;