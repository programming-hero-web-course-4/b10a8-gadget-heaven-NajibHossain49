import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const GadgetDetail = () => {
  const product = useLoaderData();
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <>
      <div className="relative">
        <div className="text-center bg-[#9538E2] p-10 pb-80">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Product Details
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mx-auto bg-white p-10 gap-12 rounded-lg shadow-lg -mt-72 mb-32">
          <div className="max-w-[350px] rounded-lg p-4">
            <img
              src={product_image}
              alt="Gadget"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold">{product_title}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Price: ${price}
              </p>
            </div>
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                availability
                  ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                  : "bg-yellow-200 text-yellow-900 border-yellow-500"
              }`}
              style={{ width: "100px", textAlign: "center" }}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </div>

            <p className="text-gray-600">{description}</p>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Specification:
              </h2>
              <ul className="list-decimal list-inside text-gray-700 ml-4">
                {Specification?.map((specs, index) => (
                  <li key={index}>{specs}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Rating:</h2>
              <div className="flex items-center">
                <div className="rating rating-lg rating-half mr-2">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      <input
                        type="radio"
                        name="rating-10"
                        className={`mask mask-star-2 mask-half-1 bg-yellow-500`}
                        defaultChecked={roundedRating >= index + 0.5}
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className={`mask mask-star-2 mask-half-2 bg-yellow-500`}
                        defaultChecked={roundedRating >= index + 1}
                      />
                    </span>
                  ))}
                </div>
                <span className="text-gray-700 text-lg font-semibold">
                  {roundedRating} / 5
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700">
                Add To Cart
              </button>
              <div className="p-2 rounded-full bg-white border border-purple-600 hover:bg-purple-100 cursor-pointer">
                <FaRegHeart className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetail;
