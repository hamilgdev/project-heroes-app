import { authReducer } from "../../auth/authReducer";
import { types } from "../../types";

describe("Tests in AuthReducer", () => {
  test("should return the state by default", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('should authenticate and put the "name" of the user', () => {
    const action = {
      type: types.login,
      payload: { name: "Miltoncodeyt" },
    };
    // initial state
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: "Miltoncodeyt",
    });
  });

  test("should delete the name of the user and logged in false", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: "Miltoncodeyt" }, action);
    expect(state).toEqual({ logged: false });
  });
});
