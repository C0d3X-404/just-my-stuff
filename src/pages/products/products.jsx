import ProductsLayout from "./productslayout";
function Products() {
  return (
    <div   className="products">
        <ProductsLayout
            img="/just-my-stuff/cars.jpg"
            name="Product 1"
            short="This is a short description of Product 1."
            price="$10.00"
        />
        <ProductsLayout
            img="/just-my-stuff/mug.jpg"
            name="Product 2"
            short="This is a short description of Product 2."
            price="$20.00"

        />

    </div>
  );
}
export default Products;