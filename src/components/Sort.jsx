import { useState } from "react";

export const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ["popular", "price", "alphabet"];
  const sortItem = list[selected];

  const onClickListItem = (index) => {
    setSelected(index); // select one item
    setIsVisible(false); // & hide popup
  };

  return (
    <div className="sort m-5 w-30">
      <div className="sort_label">
        <b>Sort by:</b>
        <span
          onClick={() => setIsVisible(!isVisible)}
          className="ml-2 border-dotted border-orange-500 border-b-4 text-orange-500 cursor-pointer"
        >
          {/* {list[selected]} */}
          {sortItem}
        </span>
      </div>
      {isVisible && (
        <div className="sort_popup mt-3  ">
          {list.map((item, index) => (
            <div
              key={item}
              onClick={() => onClickListItem(index)}
              className={`${
                selected === index ? "active:" : ""
              } p-1 pl-3 my-0.5 w-40 bg-orange-50 font-bold border-b-2 hover:bg-orange-100 cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
