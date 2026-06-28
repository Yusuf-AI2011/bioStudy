import React from "react";

const Sidebar = () => {
  const options = [{ id: 1, name: "Home", link: "" }];
  console.log(options);

  return (
    <div className="w-[10%] h-[100vh] bg-green-500">
      <div>
        {options.map((item) => (
          <button className="text-white" key={item.id}>{item?.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
