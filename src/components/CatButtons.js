import React, { useState } from "react";

export default function CatButtons({ Categories, setSelectedCategories }) {
  const [selectedButton, setSelectedButton] = useState("");


  const getButtonClass = (item, selectedButton) => {
    if (selectedButton.length - 1) {
      return "btn border-0 btn-secondary bg-danger fw-bold";
    } else {
      return item === selectedButton
      ? "btn border-0 btn-secondary bg-danger fw-bold "
      : "btn border-0 btn-secondary bg-dark fw-bold ";
    }
  };
  const buttonHandle = (item) => {
    setSelectedCategories([item]);
    setSelectedButton(item);
    
  };

  return (
    <>
      <div className="catButton  bg-white container">
        <div className=" py-3  d-flex  justify-content-between w-75 m-auto ">
          {Categories.map((item,i) => (
            <button
              key={i}
              onClick={() => buttonHandle(item)}
              type="button"
              className={getButtonClass(item, selectedButton)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <hr/>
    </>
  );
}
