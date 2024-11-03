import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData(); // Get the specific product data

  return (
    <div className="flex flex-col items-center justify-center bg-[#9538E2] container mx-auto rounded-3xl p-10 mb-96">
      <div className="bg-white text-gray-800 rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">{product.product_title}</h2>
        <img src={product.product_image} alt={product.product_title} className="w-full h-auto rounded-2xl mb-6" />
        <p className="text-lg mb-4">{product.description}</p>
        
        <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
        <ul className="mb-4">
          {product.Specification.map((spec, index) => (
            <li key={index} className="mb-1">{spec}</li>
          ))}
        </ul>
        
        <p className="text-lg font-bold">Price: ${product.price}</p>
        <p className="text-lg">Availability: {product.availability}</p>
        <p className="text-lg">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
