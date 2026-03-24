import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/PageComponents";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
