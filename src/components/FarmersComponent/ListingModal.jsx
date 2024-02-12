import { useModal } from "../../context/store";

import { useState } from "react";
import { BsUpload } from "react-icons/bs";

// Function to covert to binary64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const ListingModal = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [availablePeriod, setAvailablePeriod] = useState("");
  const [category, setcategory] = useState("");
  const [description, setDescription] = useState("");

  const { setShowListingModal } = useModal();

  const closeModal = () => {
    setAvailablePeriod("");
    setImage(null);
    setName("");
    setPrice("");
    setQuantity("");

    setShowListingModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return;
    }

    try {
      const response = await fetch(
        "https://food-tech12.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name,
            price: parseInt(price),
            description: description,
            category: category.toLowerCase(),
            quantity: parseInt(quantity),
            imageUrl:
              "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop",
          }),
        }
      );

      if (response.ok) {
        console.log("Product added successfully");
        // Optionally, you can fetch and update the list of products after adding
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }

    console.log({
      name,
      price: parseInt(price),
      description: description,
      category: category,
      quantity: parseInt(quantity),
      image: imageFile,
    });

    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    const base64 = await convertToBase64(file);
    setImageFile(base64);
  };

  return (
    <div className="rounded-2xl bg-white p-4 w-[600px]">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <label
            htmlFor="image"
            className="p-2 mb-4 flex items-center justify-center h-[150px] bg-gray-5 w-full font-oswald font-light border border-solid border-black rounded-lg outline-none"
          >
            {image ? (
              <img src={image} alt="product diagram" className="h-full" />
            ) : (
              <div className="font-oswald flex flex-col gap-3 items-center">
                <BsUpload />
                <p>
                  Drag & Drop or{" "}
                  <span className="text-green-10">choose file</span> to upload
                </p>
                <p>PNG or JPEG</p>
              </div>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            className="hidden"
            onChange={handleFileUpload}
            required
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              name="product-name"
              placeholder="Product Name"
              className="p-2 bg-gray-5 font-oswald font-light border w-full border-solid border-black rounded-lg outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity available KG"
              className="p-2 bg-gray-5 font-oswald font-light border w-full border-solid border-black rounded-lg outline-none"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              type="number"
              name="price"
              placeholder="Price per KG[#]"
              className="p-2 bg-gray-5 w-full font-oswald font-light border border-solid border-black rounded-lg outline-none"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              name="period"
              placeholder="Availability Period"
              className="p-2 bg-gray-5 w-full font-oswald font-light border border-solid border-black rounded-lg outline-none"
              required
              value={availablePeriod}
              onChange={(e) => setAvailablePeriod(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <select
              name="category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              id="category"
              required
              className="p-2 bg-gray-5 w-full font-oswald font-light border border-solid border-black rounded-lg outline-none"
            >
              <option value="diary">Diary</option>
              <option value="proteins">Proteins</option>
              <option value="vegetables">Vegetables</option>
              <option value="carbohydrates">Carbohydrates</option>
              <option value="fruits">Fruits</option>
              <option value="spices">Spices</option>
              <option value="herbs">Herbs</option>
            </select>

            <input
              type="text"
              name="description"
              placeholder="Description"
              className="p-2 bg-gray-5 w-full font-oswald font-light border border-solid border-black rounded-lg outline-none"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="font-oswald flex justify-end gap-3">
            <button
              type="reset"
              className="py-1 shadow_card px-6 rounded-md border border-solid border-black"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button className="py-1 shadow_card px-6 rounded-md bg-green-10 text-white">
              List Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingModal;
