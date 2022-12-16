import { Products } from "./components/Products";
import productsJson from "./assets/products.json";
import { useEffect, useState } from "react";
import { Sort } from "./components/Sort";
import { Category } from "./components/Category";
console.log(productsJson);

function App() {

const [products, setProducts] = useState([])

useEffect(() =>{ // wisowi this function only one time
  fetch("https://639102970bf398c73a98b8ea.mockapi.io/items") // wenn will be sapros / res
  .then((res) => { // togda
    // console.log('OTWET', res)
    return res.json(); // conwert otwet in json
  })
  .then((json) => {// togda
    // console.log('MASSIW',json)  // werni otwet w json
    setProducts(json)
  });
}, [])  // [] - means didMount = perwiy render
 

  // const [products, setProducts] = useState(productsJson);

  const addProduct = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(productsUpdate);
  };
  const removeProduct = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id && product.count
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(productsUpdate);
  };

  const updateProductPrice = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id
        ? { ...product, price: Number((product.price + 1).toFixed(2)) }
        : product
    );
    setProducts(productsUpdate);
  };

  // Total Products
  const totalProducts = products.length;

  //! Display Products
  // Total Volume
  const totalVolume = products.reduce((total, item) => {
    return total + item.volume;
  }, 0);

  // Expensive
  const expensivePrice = products.reduce((total, item) => {
    return total.price > item.price ? total : item;
  },0);

  // Cheapest
  const cheapestPrice = products.reduce((total, item) => {
    return total.price < item.price ? total : item;
  },0);

  //! Products in Fridge
  // Total Price
  const totalPrice = products.reduce((total, item) => total + item.price, 0);

  const fridgeTotalPrice = products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  // Fridge Volume
  const fridgeTotalVolume = products.reduce((total, item) => {
    return total + item.volume * item.count;
  }, 0);

  const freeVolume = products.reduce((total, item) => {
    return total - item.volume * item.count;
  }, 100);
  // products.filter((product) => product.count > 0 ? product.name : product);

  // Total Products in Fridge
  const countProductsInFridge = products.reduce(
    (total, product) => total + product.count,
    0
  );
  console.log("countProductsInFridge", countProductsInFridge);
  //! Display Products in Fridge
  // countProductsInFridge.filter(product => product.count > 0)
  // .reduce((total, product) => total[product.count] = total[product.count] ? total[product.count] + 1 : 1, {})

  const displayProductsInFridge = products
    .filter((product) => product.count > 0)
    .reduce((total, product) => {
      total[product.title] = total[product.title]
        ? total[product.title] * product.length
        : 1;
      return total;
    }, {});
  console.log("displayProductsInFridge:", displayProductsInFridge);

  const productsJsxInFridge = [];
  for (let key in displayProductsInFridge) {
    productsJsxInFridge.push(
      ` ${key}: ${""} ${displayProductsInFridge[key]} ${","}`
    );
  }
  console.log("productsJsxInFridge: ", productsJsxInFridge);

  return (
    <div className="collumn items-center">
      <div className="flex  items-center justify-center font-bold text-4xl text-orange-300 mx-auto my-2">
        <h2 className="">Smart Challenges</h2>
      </div>
      <div className="header flex justify-between h-50">
        <Category />
        <Sort />
      </div>
      <div className="flex flex-row justify-between ">
        <div className=" basis-1/2 grid grid-cols-4 gap-1 content-start bg-orange-50">
          {products.map((product) => (
            <Products
              key={product._id}
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
              updateProductPrice={updateProductPrice}
              // {...product}
            />
          ))}
        </div>

        <div className="cart basis-1/2 flex flex-col bg-orange-100">
          {/* All Products */}
          <div className="tota-products border-4 border-rose-50 p-5">
            <div className="total flex justify-center mt-6 text-orange-500 font-bold">
              Total Products: {totalProducts}
            </div>
            <div className="total flex justify-center mt-6 text-orange-500 font-bold">
              <div>All Products:</div>
              <div className="flex flex-wrap">
                {products.map((product) => (
                  <img
                    key={product._id}
                    src={product.imageUrl}
                    className="w-8 h-8 m-1"
                    alt={product.title}
                  />
                ))}
              </div>
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total volume: {totalVolume} from 100
            </div>
            <div className="expensive flex justify-center mt-6 font-bold">
              Expensive: {expensivePrice.title} costs: {expensivePrice.price}{" "}
              {""}
              <img
                src={expensivePrice.imageUrl}
                className="w-8 h-8"
                alt={expensivePrice.title}
              />
            </div>
            <div className="cheapest flex justify-center mt-6 font-bold">
              Cheapest: {cheapestPrice.title} costs: {cheapestPrice.price} {""}
              <img
                src={cheapestPrice.imageUrl}
                className="w-8 h-8"
                alt={cheapestPrice.title}
              />
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {totalPrice.toFixed(2)}
            </div>
          </div>
          {/* Products in Fridge */}
          <div className="products-in-fridge border-4 border-rose-50 p-5 mt-5">
            <div className="flex justify-center mt-2 text-orange-500 font-bold ">
              Total products in fridge: {countProductsInFridge}
            </div>
            <div className="flex justify-center mt-2 text-orange-500 font-bold ">
              Products in fridge: {productsJsxInFridge}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {fridgeTotalPrice.toFixed(2)}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Fridge volume: {fridgeTotalVolume.toFixed(0)} from 100
            </div>
          </div>
          <div className="need-for-fridge border-4 border-rose-50 p-5 mt-5">
            <div className="flex justify-center mt-2 text-orange-500 font-bold">
              Free volume: {freeVolume.toFixed(0)} from 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
