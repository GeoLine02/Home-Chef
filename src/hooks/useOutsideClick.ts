import { useEffect, useRef, RefObject } from "react";

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
): RefObject<HTMLElement> {
  // Specify the type for the ref to be an HTML element or null initially
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Check if ref is defined and the clicked element is not inside the ref element
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    // Add the event listener with the specified capturing option
    document.addEventListener("click", handleClick, listenCapturing);

    // Cleanup the event listener on component unmount or when dependencies change
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  // Return the ref object to be attached to the element
  return ref;
}
