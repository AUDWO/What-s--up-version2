import { RefObject, useEffect } from "react";

const useModalOutClickEffect = (
  modalRef: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(e.target as Node)) {
          callback();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useModalOutClickEffect;
