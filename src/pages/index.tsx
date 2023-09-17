import { useEffect, lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { useAppDispatch } from "@reduxStore/store";
import { IRootState } from "@reduxStore/state/types";

/**
 * Lazy loading is the technique of rendering only-needed
 */
const CreateExam = lazy(() => import("@components/createExam"));
const Report = lazy(() => import("@components/report"));
const AttendExam = lazy(() => import("@components/attendExam"));

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <CreateExam />,
    },
    {
      path: "create-exam",
      element: <CreateExam />,
    },
    { path: "report", element: <Report /> },
    { path: "attend-exam", element: <AttendExam /> },
    { path: "inbox", element: <h1 className="text-center">Coming Soon</h1> },
    { path: "products", element: <h1 className="text-center">Coming Soon</h1> },
    {
      path: "*",
      element: <h1 className="text-center">Page Not Found</h1>,
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  return useRoutes(routes);
}

function RoutePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // use try method to prevent Runtime error and Page breaks.
    try {
      // dynamic file import
      import("@reduxStore/reducer").then(async (req) => {
        let url =
          import.meta.env.MODE === "development"
            ? import.meta.env.VITE_LOCAL_URL
            : import.meta.env.VITE_PRODUCTION_PORT;

        /**
         * I don't use axios because we have only one API call.
         * So I go with the default fetch method.
         */

        let data = await fetch(url || "");

        if (data.status !== 200) throw "Oops! Something went wrong";

        let result: IRootState = await data.json();
        
        dispatch(req.updateDashboardDetails(result));
      });
    } catch (e: any) {
      console.warn(e.message || e);
    }
  }, []);

  return (
    <Suspense>
      <App />
    </Suspense>
  );
}

export default RoutePage;
