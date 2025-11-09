import { createBrowserRouter } from "react-router";
import Root from "./routes/Root";
import AlunosRoot from "./routes/AlunosRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "alunos/",
        Component: AlunosRoot,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
    ],
  },
]);
