import { createBrowserRouter } from "react-router-dom";
import { AddsOn, Complete, Layout, Personal, Plan, Summary } from "Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Personal />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "adds-on",
        element: <AddsOn />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "complete",
        element: <Complete />,
      },
    ],
  },
]);

export default router;
