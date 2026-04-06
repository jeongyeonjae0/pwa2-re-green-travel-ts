import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App";
import Main from "../components/Main.tsx";
import FestivalList from "../components/festivals/FestivalList.tsx";
import FestivalShow from "../components/festivals/FestivalShow.tsx";
import StayList from "../components/Staies/StayList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/festivals',
        element: <FestivalList />
      },
      {
        path: '/festivals/:id',
        element: <FestivalShow />
      },
      {
        path: '/staies',
        element: <StayList />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}