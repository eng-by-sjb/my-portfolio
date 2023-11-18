import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [isScrollDown, setIsScrollDown] = useState(false);
  const [isShowTechStack, setIsShowTechStack] = useState(false);
  const [isShowTechStackFltBtn, setIsShowTechStackFltBtn] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY;

    // if (scrollPos > prevScrollPos) {
    //   setIsScrollDown(true);
    // } else {
    //   setIsScrollDown(false);
    // }

    // setPrevScrollPos(scrollPos);

    setIsShowTechStack(scrollPos > 86);
    setIsShowTechStackFltBtn(scrollPos > 1100 && scrollPos < 3225);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isShowTechStack, isShowTechStackFltBtn };
};
