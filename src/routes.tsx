import Layout from "./Components/Layout/Index";
import Main from "./Pages/Main/Index";
import Frontend from "./Pages/Frontend/Index";
import Backend from "./Pages/Backend/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "frontend",
        element: <Frontend />,
      },
      {
        path: "backend",
        element: <Backend />,
      },
    ],
  },
];

export default routes;
