import React from "react";
import { Avatar } from "@material-ui/core";

export default function SideClient({ name, image }) {
  return (
    <div className="flex flex-row justify-between items-center my-1 gap-5">
      <Avatar src={image} />
      <span>{name}</span>
    </div>
  );
}
