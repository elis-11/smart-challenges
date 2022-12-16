import { useState } from "react";

// export const Products = ({ title, price, image, category, status, weight }) => {
export const Products = ({
  product,
  addProduct,
  removeProduct,
  updateProductPrice,
}) => {
  const [activeStatus, setActiveStatus] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const statusNames = ["packed", "apiece"];

  return (
    <div>
      <div className="w-48 m-2 bg-orange-100 shadow-lg border-2 rounded border-red-100">
        <img
          src={product.imageUrl}
          className="w-full h-24"
          alt={product.title}
        />
        <div className="data p-4">
          <div className="title font-bold">{product.title}</div>
          <div className="weight">weight: {product.weight} gr.</div>
          <div className="category">category: {product.category}</div>
          <div className="volume">volume: {product.volume}</div>
          <div
            onClick={() => updateProductPrice(product._id)}
            className="price cursor-pointer hover:bg-orange-300"
          >
            price: {product.price}
          </div>
          <div className="status flex justify-between ">
            {product.status.map((statId) => (
              <span
                onClick={() => setActiveStatus(statId)}
                key={statId}
                className={`${
                  activeStatus === statId ? "active:" : ""
                } px-3 mb-1 active:bg-violet-100 focus:ring-gray-300 hover:bg-orange-300 cursor-pointer`}
              >
                {statusNames[statId]}
              </span>
            ))}
          </div>
          <div className="sizes flex">
            <span className="flex justify-between">
              {product.sizes.map((size, index) => (
                <span
                  onClick={() => setActiveSize(i)}
                  key={size}
                  className={`${
                    activeSize === index ? "active:" : ""
                  } mr-1 hover:bg-orange-300 active:bg-violet-100 cursor-pointer`}
                >
                  {size} sm.
                </span>
              ))}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => addProduct(product._id)}
              className="bg-green-300 w-8 hover:bg-green-500"
            >
              +
            </button>
            <div className="count px-3">{product.count}</div>
            <button
              onClick={() => removeProduct(product._id)}
              className="bg-green-300 w-8 hover:bg-green-500"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
