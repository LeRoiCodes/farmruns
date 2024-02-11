import { Link, Outlet, useNavigate } from "react-router-dom";
import BottomBar from "../FarmersComponent/BottomBar";
import Sidebar from "../FarmersComponent/Sidebar";
import ListingModal from "../FarmersComponent/ListingModal";
import { useModal } from "../../context/store";
import { useEffect, useState } from "react";

import Loading from "./Loading";

const FarmersLayout = () => {
  const { showListingModal, setMerchantDetails } = useModal();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");

      setLoading(true);

      if (!token) {
        console.error("Token not found");
        navigate("/");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://food-tech12.onrender.com/api/merchant/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMerchantDetails(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch user details");
          navigate("/");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
      <BottomBar />
      {showListingModal && (
        <div className="fixed top-0 listing_modal w-screen h-screen flex items-center justify-center">
          <ListingModal />
        </div>
      )}
    </section>
  );
};

export default FarmersLayout;
