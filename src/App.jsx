import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./components/notfound/NotFound.jsx";
import logo from "./assets/10.png";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="collumn items-center">
      <div className="flex justify-between font-bold text-4xl text-orange-300 mx-2 my-2">
      <nav>
        <NavLink className="mr-4" to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
        <h2 className="">Smart Challenges</h2>
      <Link to="/">
          <img className="w-10 h-10 ml-4 mb-0 " src={logo} alt="Logo" />
        </Link>
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
