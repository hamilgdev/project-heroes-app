import HeroList from "../hero/HeroList";

const DcScreen = () => {
  return (
    <section className="my-4">
      <h1 className="text-center font-semibold text-xl text-gray-600">
        Heros DC
      </h1>
      <hr className="text-gray-300 mt-2 mb-4" />

      <HeroList publisher="DC Comics" />
    </section>
  );
};

export default DcScreen;
