import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./components/notfound/NotFound.jsx";

function App() {
  return (
    <div className="collumn items-center">
      <div className="flex  items-center justify-center font-bold text-4xl text-orange-300 mx-auto my-2">
        <h2 className="">Smart Challenges</h2>
      </div>
    <Routes>
      <Route path="" element={<Home />} />
      {/* <Route path="/product/:id" element={<Home />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
