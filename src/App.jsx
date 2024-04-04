import "./App.css";
import FirstPage from "./components/Form/FirstPage.jsx";
import Form from "./components/Form/Form.jsx";
import Shadow from "./components/BoxShadow/Shadow.jsx";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./components/Breadcrumb/Page1.jsx";
import Page2 from "./components/Breadcrumb/Page2.jsx";
import Page3 from "./components/Breadcrumb/Page3.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Breadcrumb /> */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/shadow" element={<Shadow />} />
        <Route path="/breadcrumb" element={<Breadcrumb />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
