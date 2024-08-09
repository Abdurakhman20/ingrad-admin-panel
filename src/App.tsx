import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Sessions from "./pages/Sessions/Sessions";
import LicenseKeys from "./pages/LicenseKeys/LicenseKeys";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sessions' element={<Sessions />} />
        <Route path='/license-keys' element={<LicenseKeys />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
