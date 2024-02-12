import React, { useEffect, useState } from "react";
import Sidebar from "../../components/ConsumersComponents/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { BiStore } from "react-icons/bi";
import Loading from "../../components/layouts/Loading";
import { useModal } from "../../context/store";

const listing = [
  {
    name: "Eggplants",
    image: "./assets/eggplant.png",
    source: "Farmer Fletcher",
    isFavourite: true,
    price: "200",
    merchant: {
      name: "John",
    },
  },
  {
    name: "Tomatoes",
    image: "./assets/tomato.png",
    source: "Farmer Fletcher",
    isFavourite: false,
    price: "600",
    merchant: {
      name: "John",
    },
  },
  {
    name: "Carrots",
    image: "./assets/carrot.png",
    source: "Farmer John",
    isFavourite: true,
    price: "200",
    merchant: {
      name: "John",
    },
  },
  {
    name: "Onions",
    image: "./assets/onion.png",
    source: "Farmer John",
    isFavourite: false,
    price: "800",
    merchant: {
      name: "John",
    },
  },
];

const ConsumerStore = () => {
  const { consumerCart, setConsumerCart } = useModal();

  const [originalListings, setOriginalListings] = useState([]);
  const [listings, setListings] = useState(listing);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        navigate("/");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://food-tech12.onrender.com/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
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

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await fetch(
          "https://food-tech12.onrender.com/api/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setOriginalListings(data);
          setListings(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      console.log(listings);
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filter) => {
    // Filter through the original set of products based on the selected filter
    if (filter === "all") {
      setListings(originalListings);
    } else {
      const filteredListings = originalListings.filter(
        (product) => product.category === filter // Update with your actual category property
      );
      setListings(filteredListings);
    }
  };

  const calculateTotalPrice = () => {
    return consumerCart.reduce(
      (total, cartItem) => total + cartItem.totalPrice,
      0
    );
  };

  const addProductToCart = (product) => {
    const existingProductIndex = consumerCart.findIndex(
      (cartItem) => product._id === cartItem._id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, increase the size
      const updatedCart = [...consumerCart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        size: updatedCart[existingProductIndex].size + 1,
        totalPrice:
          (updatedCart[existingProductIndex].size + 1) * product.price,
      };
      setConsumerCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it
      setConsumerCart([
        ...consumerCart,
        { ...product, size: 1, totalPrice: product.price },
      ]);
    }
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = consumerCart.filter(
      (cartItem) => cartItem._id !== productId
    );
    setConsumerCart(updatedCart);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="flex">
      <Sidebar handleFilterChange={handleFilterChange} />

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
            {listings.length < 1 ? (
              <div className="bg-white rounded-2xl shadow_card p-3 font-oswald">
                No Item found...
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {listings.map((listing, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col shadow_card bg-white rounded-2xl p-6"
                  >
                    <div className="flex justify-between">
                      <div className="font-oswald">
                        <p>{listing.name}</p>
                        <p className="text-sm font-light">
                          {listing.merchant.name}
                        </p>
                      </div>
                      <p className="font-oswald">#{listing.price}kg</p>
                    </div>
                    <img
                      src={listing.imageUrl}
                      alt={listing.name}
                      className="my-2 rounded-lg"
                    />

                    <div className="flex mt-auto items-center justify-end">
                      <div>
                        <button
                          onClick={() => addProductToCart(listing)}
                          className="font-oswald transition-all bg-green-10 text-sm px-5 rounded-lg py-1 text-white hover:bg-green-800"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="shadow_card hidden sm:block bg-white rounded-xl">
            <h2 className="font-oswald p-3 text-green-10">Cart</h2>
            {!(consumerCart.length > 0) ? (
              <div className="pl-3 font-oswald">Your cart is empty..</div>
            ) : (
              <div>
                <div>
                  {consumerCart.map((listing, index) => (
                    <div
                      key={index}
                      className="border-b border-solid p-3 border-gray-5"
                    >
                      <div className="flex items-center">
                        <img
                          src={listing.imageUrl}
                          alt={listing.name}
                          className="w-[70px] mr-1"
                        />
                        <div>
                          <p className="font-oswald text-sm">{listing.name}</p>
                          <p className="font-oswald font-light text-sm">
                            {listing.merchant.name}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <p className="font-light font-oswald text-xs">
                            Size:{" "}
                            <span className="font-normal">
                              {listing.size}kg
                            </span>
                          </p>
                          <p className="font-light font-oswald text-xs">
                            Total:{" "}
                            <span className="font-normal">
                              #{listing.totalPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex justify-end items-center">
                        <button
                          onClick={() => removeProductFromCart(listing._id)}
                          className="text-white text-xs bg-green-10 hover:bg-green-700 px-3 py-1 font-oswald rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-5 px-3">
                  <p className="font-oswald">Total</p>
                  <p className="font-oswald">#{calculateTotalPrice()}</p>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerStore;
