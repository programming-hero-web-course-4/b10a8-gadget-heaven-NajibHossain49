import { useLoaderData, Link } from "react-router-dom";

const ProductsList = () => {
  const products = useLoaderData(); // Get product data from the loader

  return (
    <div className="products-list">
      <h2>Our Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.product_id} className="card">
            <img src={product.product_image} alt={product.product_title} />
            <h3>{product.product_title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/products/${product.product_id}`}>
              <button className="btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
