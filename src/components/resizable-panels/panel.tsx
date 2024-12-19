import React from "react";

export default function Panel({
  children,
  title,
  inGroup = true,
}: {
  children: React.ReactNode;
  title: string;
  inGroup?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 ${
        inGroup ? "grow-[0.50]" : ""
      } overflow-hidden relative`}
    >
      <span className="bg-grey-light py-1 px-2 absolute top-0 left-0">
        {title}
      </span>
      {children}
    </div>
  );
}
