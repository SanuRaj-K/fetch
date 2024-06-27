import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function MainPage() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((res) => {
        setData(res.products);
        setProduct(res.products[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleImage = (id) => {
    const selectedProd = data.find((item) => item.id === id);
    setProduct(selectedProd);
  };
  return (
    <div>
      <div className=" main-head">We See risk so you see oportunity.</div>
      <div className=" container">
        <div className=" left">
          <img src={product?.images} alt="" />
          <div>
            <div>Innovation @ Oswald</div>
            <div style={{ display: "flex" }}>
              Learn what drives our team to find better ways to serve our
              clients and &nbsp; <div>READ MORE </div>
            </div>
          </div>
        </div>
        <div className=" right">
          <hr />
          {data.map((item, index) => (
            <div key={index} onClick={() => handleImage(item.id)}>
              <div className="title">{item.title}</div>
              <div className=" desc">{item.description}</div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
