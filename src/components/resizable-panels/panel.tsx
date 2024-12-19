import React from "react";

export default function Panel({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`flex flex-1 grow-[0.50] overflow-hidden relative ${
        title === "Chart" ? "" : "items-center"
      } justify-center`}
    >
      <span className="bg-grey-light py-1 px-2 absolute top-0 left-0">
        {title}
      </span>
      {children}
    </div>
  );
}
