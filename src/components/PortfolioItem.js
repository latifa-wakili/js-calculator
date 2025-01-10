const PortfolioItem = ({ title, description, image, link }) => {
  return (
    <div className="p-4">
      {/* تصویر پروژه */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105" 
      />
      <h2 className="text-xl text-white font-semibold mt-4">{title}</h2>
      <p className="text-white mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:underline mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
};

export default PortfolioItem;