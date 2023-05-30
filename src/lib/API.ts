import actions from "../redux/reducers/actions";
import { IUser } from "../types/user";

const login = (email: string, password: string) => {
  window.localStorage.setItem(
    "zeply_token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MTYyMzkwMjJ9.RlshN8AOznXWHCzfCeN4WmY4jSE9ghNNG8qS3o_0-xc"
  );

  actions.user.setUser({ email, subscriptions: [] } as unknown as IUser);
};

export { login };
