import React from "react";
import Header from "../../components/DasboardComponents/Header";
import CategoryCard from "../../components/DasboardComponents/CategoryCard";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";

const Home = () => {
  const categories = [
    {
      title: "Proteins",
      image: "../assets/protein-image.png",
    },
    {
      title: "Vegetables",
      image: "../assets/vegetables-image.png",
    },
    {
      title: "Spices",
      image: "../assets/spices-image.png",
    },
    {
      title: "Carbohydrates",
      image: "../assets/carbohydrates-image.png",
    },
  ];

  const orders = [
    {
      title: "Organic Midi",
      image: "../assets/organic-midi.png",
      source: "Farmer Johnson",
      date: "23/01/2024",
    },
    {
      title: "Family Pack",
      image: "../assets/family-pack.png",
      source: "Farmer Tasha",
      date: "23/01/2024",
    },
    {
      title: "Spice Extravaganza",
      image: "../assets/extravaganza.png",
      source: "Farmer Sam",
      date: "23/01/2024",
    },
    {
      title: "Mega Banquet",
      image: "../assets/mega-banquet.png",
      source: "Farmer Rachel",
      date: "23/01/2024",
    },
  ];

  const feeds = [
    {
      name: "Sandra Bullock",
      handle: "@sandrabullock123",
      profilePic: "../assets/profile-pic.png",
      feedPic: "../assets/dish-1.png",
      noOfComment: "200",
      noOfLikes: "435",
      isLike: true,
      comment:
        "Guys! I just made the tastiest Meatball spaghetti. My granny would be so proud.",
    },
    {
      name: "Salimah Badru",
      handle: "@salimmaahh",
      profilePic: "../assets/user-2.png",
      feedPic: "../assets/dish-2.png",
      noOfComment: "106",
      noOfLikes: "435",
      isLike: false,
      comment:
        "I decided to try out an Italian recipe i saw the other day. This is how it turned out.",
    },
    {
      name: "Nedu Philips",
      handle: "@chefnedu",
      profilePic: "../assets/user-3.png",
      feedPic: "../assets/dish-3.png",
      noOfComment: "300",
      noOfLikes: "605",
      isLike: true,
      comment:
        "Nigerian Jollof will forever be the best. Just take a look at this nau.",
    },
  ];

  return (
    <section className="bg-[#F0F0F0] h-screen overflow-y-scroll lg:pl-[43px] py-[20px] px-[20px]">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
        <div className="md:col-span-2">
          <div className="relative overflow-hidden bg-green-20 rounded-[20px] shadow_card">
            <div className="flex h-full justify-between">
              <div className="w-[450px] my-auto p-4 sm:p-8 z-10">
                <h1 className="text-3xl font-oswald">
                  Fresh & Healthy Food Within Your Grasp
                </h1>
                <p className="font-oswald text-sm my-2">
                  Improve your lifestyle by getting fresh and healthy farm
                  produce delivered right to your doorstop. Let our Farmers fend
                  for you.
                </p>
                <button className="px-5 py-1 text-white font-oswald bg-green-10 hover:bg-white hover:text-black transition rounded-lg">
                  Order Now
                </button>
              </div>
              <div className="z-10 hidden sm:block">
                <img
                  src="../assets/hero-fruit-basket.png"
                  alt="fruit basket"
                  className="h-full"
                />
              </div>
            </div>
            <img
              src="../assets/hero-bubble.png"
              alt="hero bubble"
              className="absolute hidden sm:block left-auto h-full inset-0"
            />
          </div>
          <div className="">
            {/* customer area */}
            <h2 className="font-oswald py-3">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {categories.map((category, index) => (
                <CategoryCard category={category} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow_card py-5 hidden md:block">
          {/* Order Section */}
          <h2 className="font-oswald p-3">My Order History</h2>
          <div>
            {orders.map((order, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="h-[95px] p-2"
                  />
                  <div>
                    <h3 className="font-oswald text-base">{order.title}</h3>
                    <p className="font-oswald text-sm font-light">
                      Source: {order.source}
                    </p>
                  </div>
                </div>
                <div className="pr-4">
                  <p className="text-[#787878] font-oswald text-[14px]">
                    {order.date}
                  </p>
                  <button className="w-full font-oswald rounded-md text-sm bg-green-10 text-white hover:bg-white hover:text-black transition">
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5">
        <div className="md:col-span-2 pb-4 bg-white rounded-[20px] shadow_card">
          <h2 className="font-oswald text-green-10 py-3 px-4">
            Customer's Feed
          </h2>
          <div className="w-full flex flex-col gap-3 lg:gap-0">
            {feeds.map((feed, index) => (
              <div
                key={index}
                className="w-full flex flex-col lg:flex-row lg:items-center"
              >
                <div className="flex items-center">
                  <img src={feed.feedPic} alt="feed diagram" className="px-4" />
                  <p className="w-full pr-4 lg:pr-0 lg:w-[350px] font-oswald text-sm font-light">
                    {feed.comment}
                  </p>
                </div>

                <div className="px-4 lg:px-0 lg:ml-auto w-[220px] gap-3 flex items-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center items-center">
                      {feed.isLike ? (
                        <button>
                          <GoHeartFill className="text-[#FA3636]" />
                        </button>
                      ) : (
                        <button>
                          <GoHeart />
                        </button>
                      )}
                      <p className="font-oswald font-extralight text-xs">
                        {feed.noOfLikes}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <FaRegCommentDots />
                      <p className="font-oswald font-extralight text-xs">
                        {feed.noOfComment}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={feed.profilePic}
                      alt={feed.name}
                      className="w-[40px]"
                    />
                    <div>
                      <h4 className="font-oswald text-sm">{feed.name}</h4>
                      <p className="font-oswald font-extralight text-xs">
                        {feed.handle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow_card rounded-[20px] p-5">
          <div className="relative flex justify-center items-center">
            <img src="../assets/card-bg.png" alt="master card bg" />
            <img
              src="../assets/card.png"
              alt="master card"
              className="absolute top-0"
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <button className="flex items-center gap-2 font-oswald">
              <RiAddCircleFill className="text-[26px] text-green-10" />
              Top-up Card
            </button>
            <button className="font-oswald">Upgrade Level</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
