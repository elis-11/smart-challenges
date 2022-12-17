import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="collumn items-center">
      <div className="flex  items-center justify-center font-bold text-4xl text-orange-300 mx-auto my-2">
        <h2 className="">Smart Challenges</h2>
      </div>
      <Home />
      <Cart />
      <NotFound />
    </div>
  );
}

export default App;
