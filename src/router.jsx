import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AllRepos from "./AllRepos";

// import Loading from "./components/loading";

// const Home = lazy(() => import("./pages/home"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <AllRepos />
            </Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
    {
        path: "/:repoName",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <AllRepos />
            </Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
]);

export default BrowserRouter;