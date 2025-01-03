import { useEffect, useRef } from "react";

export default function PanelResizeHandle() {
  const resizeBar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!resizeBar.current) return;

    // Get top and bottom panes as an HTMLElement to satisfy types
    const top = resizeBar.current.previousSibling as HTMLElement;
    const bottom = resizeBar.current.nextSibling as HTMLElement;

    let y = 0;
    let topHeight = 0;
    let bottomHeight = 0;

    const mouseDownHandler = (e: MouseEvent) => {
      if (!top || !bottom) return;

      topHeight = top.getBoundingClientRect().height;
      bottomHeight = bottom.getBoundingClientRect().height;

      y = e.clientY;

      document.addEventListener("mouseup", mouseUpHandler);
      document.addEventListener("mousemove", mouseMoveHandler);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dy = e.clientY - y;
      const parentHeight = resizeBar?.current?.parentNode as HTMLElement;
      let maxNum = 1;

      let newTopHeight = (
        ((topHeight + dy) * 1) /
        parentHeight.getBoundingClientRect().height
      ).toFixed(6);

      let newBottomHeight = (maxNum - Number(newTopHeight)).toFixed(6);

      let num1 = Math.min(Math.max(parseFloat(newTopHeight), 0), maxNum);
      let num2 = Math.min(Math.max(parseFloat(newBottomHeight), 0), maxNum);

      top.style.flexGrow = `${num1}`;
      bottom.style.flexGrow = `${num2}`;
    };

    const mouseUpHandler = () => {
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    // Attach Handler
    resizeBar.current.addEventListener("mousedown", mouseDownHandler);

    // Cleanup
    return () => {
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      ref={resizeBar}
      className="cursor-ns-resize h-[7px] relative my-[-3px] z-10"
    >
      <div className="bg-grey-light cursor-ns-resize h-[2px] w-full absolute top-[3px]"></div>
    </div>
  );
}
