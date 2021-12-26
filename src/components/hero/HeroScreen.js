import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Navigate to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const pathImage = `/assets/img/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <section className="my-4 | sm:flex sm:gap-4 ">
      <div className="max-w-fit m-auto p-2 border-2 border-gray-200 rounded-lg">
        <img className="rounded-lg max-h-96" src={pathImage} alt={superhero} />
      </div>
      <div className="flex-1 mt-4 text-center | sm:text-left">
        <h2 className="text-xl font-bold text-gray-700 mb-4">{superhero}</h2>
        <div className="pl-4">
          <p className="text-gray-500 border-b pb-2">
            <strong>Alter ego:</strong> {alter_ego}
          </p>
          <p className="text-gray-500 border-b pb-2">
            <strong>Publisher:</strong> {publisher}
          </p>
          <p className="text-gray-500 border-b pb-2">
            <strong>First appearance:</strong> {first_appearance}
          </p>
        </div>

        <div className="mt-2 mb-4">
          <h3 className="font-semibold text-lg text-gray-500">Characters</h3>
          <small className="text-gray-500">{characters}</small>
        </div>

        <button
          onClick={handleReturn}
          className="px-4 py-2 border border-sky-600 rounded-lg text-base text-sky-600 | hover:bg-sky-600 hover:text-sky-300"
        >
          Return
        </button>
      </div>
    </section>
  );
};

export default HeroScreen;
