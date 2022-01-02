import { Link } from "react-router-dom";
import { getPathImage } from "../../helpers/getPathImage";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <article className="flex justify-center flex-col items-center h-full max-w-[12rem] shadow-sm hover:shadow-md overflow-hidden rounded-lg | md:max-w-none md:flex-row md:items-stretch">
      <img
        src={getPathImage(`./${id}.jpg`)}
        className="h-80 object-cover | lg:h-64"
        alt={superhero}
      />

      <div className="w-full flex flex-col justify-between p-4 flex-1 | bg-gray-100">
        <h3 className="text-xl font-bold text-gray-700">{superhero}</h3>
        <div>
          <p className="text-base font-semibold text-gray-500">{publisher}</p>
          <p className="text-sm text-gray-500">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="text-sm text-gray-500">{characters}</p>
          )}
          <p className="text-sm text-gray-500">{first_appearance}</p>
        </div>
        <div className="my-4">
          <Link to={`/hero/${id}`} className="text-sky-600 hover:text-sky-300">
            More info...
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HeroCard;
