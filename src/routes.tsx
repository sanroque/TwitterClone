import { createBrowserRouter } from "react-router-dom";

import { Default } from "./layouts/Default";
import { Timeline } from "./pages/Timeline";
import { Status } from "./components/Status";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Default />,
  children: [
    {
      path: '/',
      element: <Timeline />
    },
    {
      path: '/status',
      element: <Status />
    }
  ],
 }
])