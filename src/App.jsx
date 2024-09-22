import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routersConfig";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
