import React, { useEffect, useState } from "react";
import CatButtons from "../components/CatButtons";
// import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Loader from "../components/Loading";
import getApi from "../data/Api";
import Error from "../components/Error";

export default function MenuPage({ increment, searchValue }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        setLoader(true);
        let response = await getApi("products/categories");
        if (response.ok) {
          let categories = await response.json();
          setCategories(categories);
        } else {
          throw new Error("Invalid Response ! or Invalid URL");
        }
      } catch (err) {
        setErrorMessage(err);
      }
    }
    getCategories();
    async function getData() {
      try {
        setLoader(true);
        if (selectedCategories.length === 0) {
          let response = await getApi("products");
          if (response.ok) {
            let data = await response.json();
            setProductsData(data);
          } else {
            throw new Error("Invalid response!");
          }
        } else {
          let response = await getApi(
            `products/category/${selectedCategories[0]}`
          );
          if (response.ok) {
            let data = await response.json();

            setProductsData(data);
          } else {
            throw new Error("Invalid response!");
          }
        }
      } catch (err) {
        console.log("Hello Error");
        // console.log(err.name);
        setErrorMessage(err);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [selectedCategories]);

  let finalCategories =
    selectedCategories.length === 0 ? categories : selectedCategories;

  let filterProducts = searchValue
    ? productsData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase())
      )
    : productsData;

  return (
    <div>
      <CatButtons
        Categories={categories}
        setSelectedCategories={setSelectedCategories}
      />
      {loader ? (
        <Loader />
      ) : errorMessage ? (
        <Error mesg={errorMessage} />
      ) : (
        <Products
          increment={increment}
          Products={filterProducts}
          selectCategory={finalCategories}
        />
      )}

      {/* <Pagination></Pagination> */}
    </div>
  );
}
