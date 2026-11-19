import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout.jsx";
import {
  AuthorPosts,
  Authors,
  CategoryPosts,
  CreatePost,
  Dashboard,
  EditPost,
  ErrorPage,
  Home,
  Login,
  Logout,
  PostDetail,
  Register,
  UserProfile,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "logout", Component: Logout },
      { path: "profile/:id", Component: UserProfile },
      { path: "authors", Component: Authors },
      { path: "create", Component: CreatePost },
      { path: "myposts/:id", Component: Dashboard },
      {
        path: "posts",
        children: [
          {
            path: ":id",
            children: [
              { index: true, Component: PostDetail },
              { path: "edit", Component: EditPost },
            ],
          },
          {
            path: "categories/:category",
            Component: CategoryPosts,
          },
          {
            path: "user/:id",
            Component: AuthorPosts,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
