import { createRoot } from "react-dom/client";
import {
  ScrollRestoration,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Layout from "./components/layout.tsx";
import About from "./pages/About.tsx";
import Economic from "./pages/Economic.tsx";
import Tech from "./pages/Tech.tsx";
import Sports from "./pages/Sports.tsx";
import PostDetails from "./pages/PostDetail.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/post/:title", element: <PostDetails />},
      { path: "/about", element: <About /> },
      { path: "/tech", element: <Tech /> },
      { path: "/economic", element: <Economic /> },
      { path: "/sports", element: <Sports /> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
