/* eslint-disable react/prop-types */
const Heading = ({ title }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold my-6">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
