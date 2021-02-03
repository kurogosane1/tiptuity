import React from "react";

export default function SideClient({ name, image }) {
  return (
    <div className="flex justify-between items-center mx-1 gap-5">
      <img src={image} alt={''} />
      <span>{name}</span>
    </div>
  );
}
