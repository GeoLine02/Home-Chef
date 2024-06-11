import Product from "../../elements/ProductCard";
export type ProductType = {
  id: number;
  productName: string;
  productComposition: string;
  restaurantID: number;
  productPhoto: string;
  productPrice: number;
  productDescription: string;
  cartItemQuantity?: number;
  createdAt:  string;
  orderSequence: number;
  status: string
  order: object;
};

type ProductListProps = {
  products: ProductType[] | undefined;
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 px-3 gap-8 justify-center md:grid-cols-2 lg:grid-cols-3 ">
      {products?.map((product: ProductType) => (
        <Product
          productComposition={product.productComposition}
          restaurantID={product.restaurantID}
          id={product.id}
          key={product.id}
          productName={product.productName}
          productPhoto={product.productPhoto}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
          createdAt = {product.createdAt}
          orderSequence={product.orderSequence}
          status={product.status}
          order={product.order}
        />
      ))}
    </div>
  );
};

export default ProductList;
