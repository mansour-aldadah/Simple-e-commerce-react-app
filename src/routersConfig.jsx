import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/pages/cart/cart";
import NotFound from "./components/pages/notFound/notFound";
import Category, {
  CategoriesLoader
} from "./components/pages/category/category";
import Product from "./components/pages/product/product";
import Store from "./components/pages/store/store";
import Main from "./components/shared/layout/main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <Store /> },
          {
            path: "/:category",
            element: <Category />,
            loader: CategoriesLoader
          }
        ]
      },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },

      { path: "*", element: <NotFound /> }
    ]
  }
]);
