import "./App.css";
import FirstPage from "./components/Form/FirstPage.jsx";
import Form from "./components/Form/Form.jsx";
import Shadow from "./components/BoxShadow/Shadow.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/shadow" element={<Shadow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
