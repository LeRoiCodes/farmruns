import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./components/layouts/RootLayout";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/blog" element={<BlogPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
