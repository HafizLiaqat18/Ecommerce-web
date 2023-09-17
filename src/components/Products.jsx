import React from "react";
import KfcCard from "./KfcCard";
export default function Products({
  Products,
  selectCategory,

}) {

  return (
    <div className="container">

      {selectCategory.map((category,i) => (
        <div key={i}>
          <h3 className="text-dark fw-bolder text-uppercase my-3">
            {category}
          </h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {Products.map((item ,i) =>
              item.category === category? (
                <KfcCard key={i} item={item}/>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
