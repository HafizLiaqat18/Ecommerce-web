import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import Loader from "../components/Loading";
import getApi from "../data/Api";

export default function ProductDetail({ addProduct }) {
const [loader , setLoader] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});
  const product = {
    ...selectedProduct,
    quantity: 1,
  };
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        let response = await getApi(`products/${id}`);
        if (response.ok) {
          let data = await response.json();
          setSelectedProduct(data);
        } else {
          throw new Error("Invalid URL");
        }
      } catch (err) {
        console.log(err);
      }finally{
        setLoader(false)
      }
    }
    getData();
  }, [id]);
  const sweetAlert = () => {
    swal({
      title: "Order Placed to Cart!",
      text: "If you want more then select more products!",
      icon: "success",
    });
  };

  return (
    <>

    {
      loader? <Loader/>:(
        <div
        className="text-white container shadow p-3 mb-5 bg-white text-dark rounded   "
        style={{ width: "100-vw", height: "70vh" }}
      >
        <div className="wrapper d-flex justify-content-between h-100 w-100 p-5">
          <div className="image w-50 h-100">
            <img className="w-50 h-100 border " src={product.image} alt="" />
          </div>
          <div className="product-detail w-50 text-dark ">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="bg-danger text-white d-inline rounded p-2">
              {" "}
              Price : ${product.price}
            </p>
            <button
              className="btn mx-3 w-25 btn-success text-white d-inline"
              onClick={() => {
                // orderInToCart(product);
                addProduct(product);

                sweetAlert();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      )
    }
    </>
     
  );
}
