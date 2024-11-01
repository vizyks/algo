import React from "react";

export default function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 grow-[0.50] justify-center items-center overflow-hidden">
      {children}
    </div>
  );
}
