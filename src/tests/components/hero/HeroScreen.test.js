import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import HeroScreen from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Tests in <HeroScreen />", () => {
  test("should navigate to / if there is not hero in the URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find("h1").text().trim()).toBe("No Hero Page");
  });

  test("should display a hero if parameter exists", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find("button").text().trim()).toBe("Return");
  });

  test("should display No Hero Page if hero parameter not exists", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman123123"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.text().trim()).toBe("No Hero Page");
  });

  test("should go back to the previous page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
