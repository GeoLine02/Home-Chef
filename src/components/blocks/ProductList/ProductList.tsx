import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../../helpers/http";
import Product from "../../elements/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantProducts } from "../../../store/actions/actionCreator";
import { RootState } from "../../../store/state/rootReducers";

export type ProductType = {
  id: number;
  productName: string;
  productComposition: string;
  restaurantID: number;
  productPhoto: string;
  productPrice: number;
  productDescription: string;
  cartItemQuantity?: number;
};

const ProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productsData = useSelector(
    (state: RootState) => state.products.products
  );
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiCallOptions = {
          headers: { "content-type": "application/json" },
          method: "GET",
        };
        const res = await http(`/restaurant/${params.id}`, apiCallOptions);
        const data = await res.json();
        dispatch(fetchRestaurantProducts(data.products));
      } catch (err) {
        console.log("Porducts fetching error!", err);
      }
    };
    fetchProducts();
  }, [params, dispatch]);

  return (
    <div className="grid grid-cols-1 gap-8 justify-center md:grid-cols-2 lg:grid-cols-3 pb-11 px-4">
      {productsData.map((product: ProductType) => (
        <Product
          productComposition={product.productComposition}
          restaurantID={product.restaurantID}
          id={product.id}
          key={product.id}
          productName={product.productName}
          productPhoto={product.productPhoto}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
        />
      ))}
    </div>
  );
};

export default ProductList;
