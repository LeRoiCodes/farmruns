import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-[20px] shadow_card">
      <img
        src={category.image}
        alt={category.title}
        className="rounded-[20px] w-full"
      />
      <p className="font-oswald text-center py-2">{category.title}</p>
    </div>
  );
};

export default CategoryCard;
