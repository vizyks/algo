type SidebarStyle = "left" | "right";

export const Sidebar = ({
  style,
  children,
}: {
  children: React.ReactNode;
  style: SidebarStyle;
}) => {
  if (style === "right") {
    return <div className="max-w-[400px] w-full bg-grey">{children}</div>;
  } else {
    return <div className="max-w-[350px] w-full bg-grey px-4">{children}</div>;
  }
};
