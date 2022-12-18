import { useState } from "react";

export const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["Necklace", "Bracelet", "Ring", "Earrings"];

  const activeCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="categories flex mt-12">
        {categories.map((value, index) => (
          <div
            key={value}
            onClick={() => activeCategory(index)}
            className={`${
              activeIndex === index ? "active" : ""
            } bg-orange-300 hover:bg-orange-500 active:bg-orange-400 text-white p-4 m-2 h-12  rounded-2xl opacity-50 cursor-pointer`}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
};
