import Image from "next/image";
import React from "react";

const CategoryList = ({ CategoryList, backendBaseUrl }) => {
  //   console.log(CategoryList);
  //   console.log(CategoryList[0].name);
  //   console.log(backendBaseUrl + CategoryList[0]?.icon?.[0]?.url);
  return (
    <section className="my-8">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 my-4">
        {CategoryList.map((category, _id) => (
          <div
            key={_id}
            className="flex flex-col items-center bg-green-100 gap-2 py-4 rounded-lg group cursor-pointer"
          >
            <Image
              src={backendBaseUrl + category?.icon?.[0]?.url}
              alt="icon"
              width={50}
              height={50}
              unoptimized={true}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-center text-sm">{category.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
