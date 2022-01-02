const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../auth/authContext");
const { default: DashboardRouter } = require("../../routers/DashboardRouter");

describe("Tests in <DashboardRoutes />", () => {
  const contextValue = {
    user: { logged: true, name: "Miltoncodeyt" },
  };
  test("should display correctly - Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Heros Marvel");
    expect(wrapper.find("nav h3").text().trim()).toBe("Miltoncodeyt");
  });

  test("should diaply correctly - DC", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Heros DC");
  });
});
