import Home from "@src/components/Home";
import AuthLayout from "@src/components/layouts/Auth";
import SecureLayout from "@src/components/layouts/Secure";
import SocketProvider from "@src/components/layouts/Socket";
import NotFound from "@src/components/Not-found";
import Login from "@src/features/auth/components/Login";
import Register from "@src/features/auth/components/Register";
import Verify from "@src/features/auth/components/Verify";
import Game from "@src/features/game/components/Game";
import ListGame from "@src/features/game/components/ListGame";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SecureLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/game",
        element: <SocketProvider />,
        children: [
          {
            path: "/game/:gameId",
            element: <Game />,
          },
          {
            path: "/game/list",
            element: <ListGame />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
    ],
  },
]);

export default router;
