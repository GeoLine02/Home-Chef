type InitialStateType = {
  isUserLoggedIn: boolean;
};

const initialState: InitialStateType = {
  isUserLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {};

    default:
      return state;
  }
};
