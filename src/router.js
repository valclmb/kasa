import { createBrowserRouter } from "react-router-dom";
import { About } from "./containers/About/About";
import App from "./containers/App";
import { Home } from "./containers/Home/Home";
import { Housing } from "./containers/Housing/Housing";
import { PageNotFound } from "./containers/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/housing/:id", element: <Housing /> },
      // 404 Page not found
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
