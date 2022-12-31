import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import LoginScreen from "../../../components/login/LoginScreen";
import { types } from "../../../types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Tests in <LoginScreen />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should display correctly by default", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should to the dispatch and navigate", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: "Welcome" },
    });
    expect(mockNavigate).toHaveBeenCalledWith("/marvel", { replace: true });
  });
});
