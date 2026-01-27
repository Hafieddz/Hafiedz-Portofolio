import App from "@/App";
import Playground from "@/pages/Playground";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [],
  },
  {
    path: "/playground",
    Component: Playground,
    children: [],
  },
]);

export default router;
