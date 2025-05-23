import { Link } from "react-router-dom";
function ProductsLayout(props) {
  return (
      <Link to={props.page} className="productCard">
          <img src={props.img} alt="Product Image" className="productImage" />
          <h1 className="productTitle">{props.name}</h1>
          <p className="productDescription">{props.short}</p>
          <p className="productPrice">{props.price}</p>
      </Link>

  );
}
export default ProductsLayout;