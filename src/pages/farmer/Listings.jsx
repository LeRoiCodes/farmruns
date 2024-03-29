import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { BiStore } from "react-icons/bi";
import { useModal } from "../../context/store";

const listings = [
  {
    name: "Proteins",
    imageUrl: "../assets/protein-image.png",
    price: "1,200",
  },
  {
    name: "Vegetables",
    imageUrl: "../assets/vegetables-image.png",
    price: "1,000",
  },
  {
    name: "Spices",
    imageUrl: "../assets/spices-image.png",
    price: "800",
  },
  {
    title: "Carbohydrates",
    imageUrl: "../assets/carbohydrates-image.png",
    price: "600",
  },
];

const feedbacks = [
  {
    name: "Sandra Bullock",
    handle: "@sandrabullock123",
    profilePic: "../assets/profile-pic.png",
    comment:
      "I decided to try out an Italian recipe i saw the other day. This is how it turned out.",
  },
  {
    name: "Salimah Badru",
    handle: "@salimmaahh",
    profilePic: "../assets/user-2.png",
    comment:
      "Nigerian Jollof will forever be the best. Just take a look at this nau.",
  },
  {
    name: "Nedu Philips",
    handle: "@chefnedu",
    profilePic: "../assets/user-3.png",
    comment:
      "Nigerian Jollof will forever be the best. Just take a look at this nau.",
  },
];

const orders = [
  {
    title: "Organic Midi",
    source: "Anonymous251",
    size: "24",
  },
  {
    title: "Family Pack",
    source: "Susan Fletcher",
    size: "6",
  },
  {
    title: "Spice Extravaganza",
    source: "Samantha George",
    size: "10",
  },
];

const Listings = () => {
  const { setShowListingModal } = useModal();

  const [products, setProducts] = useState(listings);

  useEffect(() => {
    const fetchUserProducts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await fetch(
          "https://food-tech12.onrender.com/api/merchant/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUserProducts();
  }, []);

  const openModal = () => {
    setShowListingModal(true);
  };

  return (
    <section className="bg-[#F0F0F0] h-screen overflow-y-scroll lg:pl-[43px] py-[20px] px-[20px]">
      <div className="flex justify-end">
        <nav className="flex items-center gap-3">
          <Link to="/shop" className="p-3 bg-white rounded-full">
            <PiShoppingCart className="text-2xl text-black" />
          </Link>
          <Link to="/shop" className="p-3 bg-white rounded-full">
            <BiStore className="text-2xl text-black" />
          </Link>
          <button className="flex justify-center items-center h-[48px] w-[48px] rounded-full overflow-hidden">
            <img
              src="../assets/profile-pic.png"
              alt="user profile"
              className="w-full h-full"
            />
          </button>
        </nav>
      </div>

      <div className="grid grid-cols-1 mt-2 sm:mt-0 sm:grid-cols-3 gap-5 mb-2">
        <div className="sm:col-span-2 flex justify-between items-center">
          <h2 className="font-oswald">Active Listings</h2>
          <button
            onClick={openModal}
            className="px-4 text-xs py-1 text-white font-oswald bg-green-10 rounded-md shadow-md"
          >
            New Listing
          </button>
        </div>
      </div>

      <section className="grid sm:grid-cols-3 gap-5">
        <div className="col-span-2">
          {/* Listings */}
          {!(products.length > 0) ? (
            <div className="w-full p-4 h-full shadow_card bg-white rounded-xl">
              <p className="font-oswald">No product added yet!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {products.map((listing, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-2 shadow_card relative overflow-hidden"
                >
                  <button className="px-4 py-1 bg-black rounded-lg text-xs text-white absolute right-5 top-5 font-oswald hover:bg-white hover:text-black transition-all">
                    Edit Listing
                  </button>
                  <img
                    src={listing.imageUrl}
                    alt={listing.name}
                    className="w-full rounded-lg"
                  />
                  <div className="flex gap-11 max-sm:text-[12px] max-sm:py-1 py-3 justify-center bg-white absolute bottom-0 w-full">
                    <p className="font-oswald">{listing.name}</p>
                    <p className="font-oswald">#{listing.price}/KG</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customers feedback */}

          <div className="bg-green-20 mb-9 md:mb-0 mt-2 rounded-xl">
            <h2 className="font-oswald mx-4 py-4">Customers Feedback</h2>
            <div>
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="border-b border-[#F0F0F0] border-solid flex items-center gap-1 p-2"
                >
                  <div className="w-10 border-2 overflow-hidden border-solid border-[#F0F0F0] rounded-full">
                    <img src={feedback.profilePic} alt={feedback.name} />
                  </div>

                  <div>
                    <p className="font-oswald text-sm">
                      {feedback.name}{" "}
                      <span className="font-oswald text-xs font-extralight">
                        {feedback.handle}
                      </span>
                    </p>
                    <p className="font-oswald font-light">{feedback.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          {/* Pending Orders */}

          <div className="rounded-xl bg-white shadow_card overflow-hidden">
            <div className="flex justify-between items-center p-2">
              <h2 className="font-oswald text-green-10">Pending Orders</h2>
              <p className="font-oswald text-gray-400">23rd January, 2024</p>
            </div>
            <div>
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border-b border-solid border-[#F0F0F0] flex items-center justify-between font-oswald p-2"
                >
                  <div>
                    <p className="text-sm">{order.title}</p>
                    <p className="font-light text-sm">
                      Size: <span className="font-normal">{order.size}kg</span>
                    </p>
                  </div>
                  <div className="text-xs font-oswald text-center">
                    <p>{order.source}</p>
                    <button className="px-3 py-1 bg-[#FFB341] border border-solid border-transparent rounded-lg text-white hover:border-[#FFB341] transition-all hover:bg-white hover:text-[#FFB341]">
                      Confirm Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sale History */}

          <div className="rounded-xl bg-white shadow_card overflow-hidden mt-4 py-2">
            <div className="flex justify-between items-center p-2">
              <h2 className="font-oswald text-green-10">Sale History</h2>
              <p className="font-oswald text-gray-400">23rd January, 2024</p>
            </div>
            <div className="text-center">
              <p className="font-oswald">No sale history yet</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Listings;
