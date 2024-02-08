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
import Home from "./pages/creator/Home";
import FarmerHome from "./pages/farmer/FarmerHome";
import Listings from "./pages/farmer/Listings";
import FarmerOrder from "./pages/farmer/FarmerOrder";
import FarmerDicount from "./pages/farmer/FarmerDiscount";
import FarmerShipping from "./pages/farmer/FarmerShipping";
import FarmerSettings from "./pages/farmer/FarmerSettings";
import Blog from "./pages/creator/Blog";
import Favourites from "./pages/creator/Favourites";
import Shop from "./pages/creator/Shop";
import Order from "./pages/creator/Order";
import FarmersHub from "./pages/creator/FarmersHub";
import Settings from "./pages/creator/Settings";
import FarmersLayout from "./components/layouts/FarmersLayout";
import ConsumerStore from "./pages/consumer/ConsumerStore";

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
      <Route path="/farmer" element={<FarmersLayout />}>
        <Route path="home" element={<FarmerHome />} />
        <Route path="listings" element={<Listings />} />
        <Route path="order" element={<FarmerOrder />} />
        <Route path="discount" element={<FarmerDicount />} />
        <Route path="shipping" element={<FarmerShipping />} />
        <Route path="settings" element={<FarmerSettings />} />
      </Route>
      <Route path="/consumer" element={<ConsumerStore />} />
      <Route path="/blog" element={<BlogPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
