import type { RouteObject } from "react-router";
import Login from "../pages/Login";
import Main from "../pages/main/Main";
import List from "../pages/main/List";
import Subscription from "../pages/Subscription";
import TopSearch from "../pages/TopSearch";
import AddressInfo from "../pages/main/AddressInfo";
import TransactionInfo from "../pages/main/TransactionInfo";
import Notification from "../pages/Notification";

const routes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "/*",
    element: <Main />,
    children: [
      {
        children: [
          {
            path: "list",
            element: <List />,
          },
          {
            path: "subscriptions",
            element: <Subscription />,
          },
          {
            path: "address/:addressId",
            element: <AddressInfo />,
          },
          {
            path: "transaction/:transactionId",
            element: <TransactionInfo />,
          },
          {
            path: "notifications",
            element: <Notification />,
          },
          {
            path: "*",
            element: <TopSearch />,
          },
        ],
      },
    ],
  },
];

export default routes;
