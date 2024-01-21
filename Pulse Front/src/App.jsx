import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import AddPage from "./pages/Add/AddPage";
import Wishlist from "./pages/Wishlist/Wishlist";
import Detail from "./pages/Details/Detail";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />

            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
