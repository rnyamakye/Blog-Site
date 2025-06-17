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
      { path: "about", element: <About /> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
