import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router";
import useQuery from "../../hooks/useQuery";
import { getProductById } from "../../api/getProducts";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    isFail,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useQuery({ fetchFn: getProductById, dependencies: [id], args: [id] });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isFail && <p>{error.message}</p>}
      {isSuccess && <ProductCard product={product} resetFetch={reset} />}
    </>
  );
};
export default Product;
