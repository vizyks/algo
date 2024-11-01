import React from "react";

export default function PanelGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-col h-screen w-full">{children}</div>
    </div>
  );
}
