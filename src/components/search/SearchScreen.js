import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;

  const heroesFilted = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <section className="my-4">
      <h1 className="text-xl text-gray-600 text-center">
        <strong>Search Hero</strong> | 🦸‍♀️
      </h1>
      <form
        className="flex gap-4 my-4 flex-col sm:flex-row max-w-md m-auto text-center"
        onSubmit={handleSearch}
      >
        <input
          className="p-2 rounded-lg w-full bg-slate-50"
          type="text"
          placeholder="Iron man, Thor..."
          onChange={handleInputChange}
          name="searchText"
          value={searchText}
        />
        <button
          className="py-2 px-4 rounded-lg text-sky-600 bg-sky-300 | hover:bg-sky-600 hover:text-sky-300"
          type="submit"
        >
          Search
        </button>
      </form>

      {!heroesFilted.length && (
        <div className="p-4 bg-sky-200 rounded-md w-full">
          <p className="text-sky-600">Without result</p>
        </div>
      )}

      <div className="flex items-center justify-center flex-col gap-4 | sm:grid sm:justify-items-center sm:grid-cols-3 md:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3">
        {heroesFilted.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </section>
  );
};

export default SearchScreen;
