import { Link } from "react-router-dom"; 

const Card = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {results.map(({ show }) => (
        <div
          key={show.id}
          className="bg-black rounded-md p-4 hover:shadow-xl transition max-w-xl w-full mx-auto"
        >
          <Link to={`/shows/${show.id}`}>
            <img
              src={
                show.image?.medium ||
                "https://via.placeholder.com/210x295?text=No+Image"
              }
              alt={show.name}
              className="w-full h-auto rounded"
            />
            <h2 className="text-2xl text-white font-serif mt-4">{show.name}</h2>
          </Link>
          <div className="mt-1 flex flex-wrap gap-1">
            {show.genres.map((ident, idx) => (
              <span
                key={idx}
                className="
                bg-gray-300 
                text-black 
                text-serif 
                px-2 py-1 
                rounded-md"
              >
                #{ident}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
