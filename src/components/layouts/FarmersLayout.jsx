import { Outlet } from "react-router-dom";
import BottomBar from "../DasboardComponents/BottomBar";
import Sidebar from "../FarmersComponent/Sidebar";
import ListingModal from "../FarmersComponent/ListingModal";
import { useModal } from "../../context/store";

const FarmersLayout = () => {
  const { showListingModal } = useModal();

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
