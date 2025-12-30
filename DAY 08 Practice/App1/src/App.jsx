import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import Login from "../services/userService"



// functional components
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App