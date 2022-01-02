import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe("Tests in <AppRouter />", () => {
  test("should show login if not authenticated", () => {
    const contextValue = {
      user: { logged: false },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h2").text().trim()).toBe("Login");
  });

  test("should show the component Marvel if authenticated", () => {
    const contextValue = {
      user: { logged: true, name: "Miltoncodeyt" },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("nav").exists()).toBe(true);
  });
});
