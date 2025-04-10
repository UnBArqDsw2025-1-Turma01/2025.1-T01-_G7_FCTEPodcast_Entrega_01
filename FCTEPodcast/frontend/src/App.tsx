import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ValidarConta from "./pages/validar-conta/ValidarConta";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/conta/validar/:otp" element={<ValidarConta />} />
      </Routes>
    </div>
  );
}

export default App;
