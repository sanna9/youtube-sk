import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Subscriptions from "../pages/Subscriptions";
import Library from "../pages/Library";
import DefaultLayout from "../Layout/DefaultLayout";
import Watch from "../pages/Watch";

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // will render this when the parent path is matched exactly
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "library",
        element: <Library />,
      },
    ],
  },
];

export default routes;
