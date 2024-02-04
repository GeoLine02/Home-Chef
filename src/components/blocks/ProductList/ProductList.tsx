import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../../helpers/http";
import Product from "../../elements/ProductCard";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const params = useParams();
  const dispatch = useDispatch;
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiCallOptions = {
          headers: { "content-type": "application/json" },
          method: "GET",
        };
        const res = await http(`/restaurant/${params.id}`, apiCallOptions);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Porducts fetching error!", err);
      }
    };
    fetchProducts();
  }, [params]);
  return (
    <div>
      
    </div>
  );
};

export default ProductList;
