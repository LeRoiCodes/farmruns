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
import RootLayout from "./components/layouts/RootLayout";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/consumer/Home";
import Blog from "./pages/consumer/Blog";
import Favourites from "./pages/consumer/Favourites";
import Shop from "./pages/consumer/Shop";
import Order from "./pages/consumer/Order";
import FarmersHub from "./pages/consumer/FarmersHub";
import Settings from "./pages/consumer/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="customer-blog" element={<Blog />} />
        <Route path="farmers-hub" element={<FarmersHub />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order" element={<Order />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/blog" element={<BlogPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
