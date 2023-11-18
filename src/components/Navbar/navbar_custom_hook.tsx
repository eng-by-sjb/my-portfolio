import { useCallback, useEffect, useState } from "react";

export const useNavScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isHideNavBg, setIsHideNavBg] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    // console.log(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }

    setIsHideNavBg(currentScrollPos <= 5);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isScrollDown, isHideNavBg };
};
