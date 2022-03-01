import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.productID}</p>
    </section>
  );
};

export default ProductDetail;
