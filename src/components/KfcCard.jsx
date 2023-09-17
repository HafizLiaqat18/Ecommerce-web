import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function KfcCard({ item }) {
  let navigate = useNavigate();

  let desc =
    item.description.length > 40
      ? item.description.slice(0, 40) + "......"
      : item.description;
  let title =
    item.title.length > 35 ? item.title.slice(0, 35) + "....." : item.title;

  return (
    <button onClick={()=>{  navigate(`/products/${item.id}`)}} style={{ textDecoration: "none",border:"none" , background:"none" }} to={`/products/${item.id}`}>
      <div className="col">
        <div
          className="card bg-light text-dark"
          style={{ width: "15rem", height: "25rem" }}
        >
          <img
            style={{
              paddingTop:"1.5rem",
              width: "43%",
              margin: "auto",
              height: "43%",
              objectFit: "cover",
              objectPosition: "50% 50%",
              cursor: "pointer",
            }}
            src={item.image}
            className="card-img-top  "
            alt="kfc card"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text ">
              {desc}
              <span className="badge d-block w-50 px-1 my-1 text-bg-danger mx-2">
                Rs. {item.price}
              </span>
            </p>

            <Link className="btn btn-danger" to={`/products/${item.id}`}>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
}
