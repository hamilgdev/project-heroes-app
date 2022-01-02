import HeroList from "../hero/HeroList";

const MarvelScreen = () => {
  return (
    <section className="my-4">
      <h1 className="text-center font-semibold text-xl text-gray-600">
        Heros Marvel
      </h1>
      <hr className="text-gray-300 mt-2 mb-4" />

      <HeroList publisher="Marvel Comics" />
    </section>
  );
};

export default MarvelScreen;
