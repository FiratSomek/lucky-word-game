import CategoryList from "@/components/CategoryList";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col items-center w-3/4 h-128 
"
      >
        <CategoryList />
      </div>
    </div>
  );
};

export default CategoryPage;
