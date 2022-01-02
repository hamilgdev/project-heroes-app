import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

describe("Tests in <SearchScreen />", () => {
  test("should display correctly by default", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1 strong").text().trim()).toBe("Search Hero");
  });

  test("should display to Batman and the input with the value of the queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("should display without result if hero no exist", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=boyacoman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find("div p").text().trim()).toBe("Without result");
  });
});
