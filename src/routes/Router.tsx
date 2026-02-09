import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App";
import Main from "../components/Main.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}