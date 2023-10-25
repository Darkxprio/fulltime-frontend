import Layout from "./Components/Layout/Index";
import Main from "./Pages/Main/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
];

export default routes;
