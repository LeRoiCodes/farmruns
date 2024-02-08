import React from "react";
import Sidebar from "../../components/ConsumersComponents/Sidebar";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { BiStore } from "react-icons/bi";
import { GoHeart, GoHeartFill } from "react-icons/go";

const listings = [
  {
    name: "Eggplants",
    image: "./assets/eggplant.png",
    source: "Farmer Fletcher",
    isFavourite: true,
    price: "200",
  },
  {
    name: "Tomatoes",
    image: "./assets/tomato.png",
    source: "Farmer Fletcher",
    isFavourite: false,
    price: "600",
  },
  {
    name: "Carrots",
    image: "./assets/carrot.png",
    source: "Farmer John",
    isFavourite: true,
    price: "200",
  },
  {
    name: "Onions",
    image: "./assets/onion.png",
    source: "Farmer John",
    isFavourite: false,
    price: "800",
  },
];

const ConsumerStore = () => {
  return (
    <section className="flex">
      <Sidebar />

      {/* Main store */}

      <div className="w-full h-screen overflow-y-scroll py-4 px-6 bg-[#F0F0F0]">
        {/* Navigation */}
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

        {/* Main section */}

        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          <div className="col-span-2 grid">
            <div className="grid sm:grid-cols-2 gap-4">
              {listings.map((listing, index) => (
                <div
                  key={index}
                  className="relative flex flex-col shadow_card bg-white rounded-2xl p-6"
                >
                  <div className="flex justify-between">
                    <div className="font-oswald">
                      <p>{listing.name}</p>
                      <p className="text-sm font-light">{listing.source}</p>
                    </div>
                    <p className="font-oswald">#{listing.price}kg</p>
                  </div>
                  <img src={listing.image} alt={listing.name} />
                  <button className="absolute bottom-16 right-5">
                    {listing.isFavourite ? (
                      <GoHeart />
                    ) : (
                      <GoHeartFill className="text-red-500" />
                    )}
                  </button>
                  <div className="flex mt-auto items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <button
                        className="w-4 h-4 flex justify-center items-center rounded-md border border-solid border-black"
                        disabled
                      >
                        -
                      </button>
                      <div className="flex font-oswald text-sm items-center justify-center w-6 h-6 rounded-md border border-solid border-black">
                        1
                      </div>
                      <button className="w-4 h-4 flex justify-center items-center rounded-md border border-solid border-black">
                        +
                      </button>
                    </div>
                    <div>
                      <button className="font-oswald transition-all bg-green-10 text-sm px-5 rounded-lg py-1 text-white hover:bg-green-800">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="shadow_card hidden sm:block bg-white rounded-xl">
            <h2 className="font-oswald p-3 text-green-10">Cart</h2>
            <div>
              {listings.map((listing, index) => (
                <div
                  key={index}
                  className="border-b border-solid p-3 border-gray-5"
                >
                  <div className="flex items-center">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-[70px] mr-1"
                    />
                    <div>
                      <p className="font-oswald text-sm">{listing.name}</p>
                      <p className="font-oswald font-light text-sm">
                        {listing.source}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-light font-oswald text-xs">
                        Size: <span className="font-normal">1kg</span>
                      </p>
                      <p className="font-light font-oswald text-xs">
                        Total: <span className="font-normal">#2000</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <button className="text-white text-xs bg-green-10 hover:bg-green-700 px-3 py-1 font-oswald rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-5 px-3">
              <p className="font-oswald">Total</p>
              <p className="font-oswald">#1,000</p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <button className="w-full font-oswald bg-green-10 text-white hover:bg-green-700 py-1 rounded-lg">
                Confirm Order
              </button>
              <button className=" w-full font-oswald shadow_card hover:bg-gray-5 py-1 rounded-lg">
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerStore;
