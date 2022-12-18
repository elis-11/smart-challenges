import { useState } from "react";

export const Sort = ({ value, onChangeSort }) => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {name: "popular", sort: 'rating'},
    {name: "price", sort: 'price'},
    {name: "alphabet", sort: 'title'},
  ]
  // const sortName = list[value].name;

  const onClickListItem = (i) => {
    onChangeSort(i); // select one item
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
          {value.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort_popup mt-3  ">
          {list.map((obj, i) => (
            <div
              key={i}
              onClick={() => onClickListItem(obj)}
              className={`${
                value.sort === obj.sort ? "active" : ""
              } pl-5 my-0.5 w-40 bg-orange-100 font-bold border-b-2 hover:bg-orange-50 cursor-pointer`}
            >
              {obj.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
