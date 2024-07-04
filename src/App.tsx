import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./routes/Root";
import ErrorBoundary from "./routes/ErrorBoundary";
import HomePage from "./routes/home/HomePage";
import AnimePage from "./routes/anime/AnimePage";
import SearchPage from "./routes/search/SearchPage";
import SearchResults from "./routes/search/components/SearchResults";
import RankingsPage from "./routes/rankings/RankingsPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ":type/:animeId",
            element: <AnimePage />,
          },
          {
            path: "search",
            element: <SearchPage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <SearchResults />,
                  },
                ],
              },
            ],
          },
          {
            path: "rankings/",
            element: <RankingsPage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    path: ":rankings",
                    element: <RankingsPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
