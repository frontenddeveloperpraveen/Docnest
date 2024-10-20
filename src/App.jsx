import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DocumentPage from "./components/DocumentPage";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/document/${uuidv4()}`} replace />}
        />
        <Route path="/document/:id" element={<DocumentPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
