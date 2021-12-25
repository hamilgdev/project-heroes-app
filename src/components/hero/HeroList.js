import { useMemo } from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="flex items-center justify-center flex-col gap-4 | sm:grid sm:justify-items-center sm:grid-cols-3 md:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
