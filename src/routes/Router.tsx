import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App";
import Main from "../components/Main.tsx";
import FestivalList from "../components/festivals/FestivalList.tsx";

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
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}