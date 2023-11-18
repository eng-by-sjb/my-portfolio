import { BiDownArrowAlt } from "react-icons/bi";
import { useScroll } from "../reusable_custom_hooks";

const ToEndTechStackFloatBtn = () => {
  const { isShowTechStackFltBtn } = useScroll();
  // console.log(scrollPos);
  // 173
  // 1024 for floatButton appear
  // 2954 scroll to end of techStacks

  const FloatBtnAnimeStyles = isShowTechStackFltBtn
    ? "duration-[1000ms] ease-out opacity-100"
    : `duration-[100ms] ease-in-out opacity-0 scale-90 invisible`;

  return (
    <button onClick={() => window.scrollTo({ top: 3500 })} className="md:hidden opacity-70">
      <div
        className={`z-50 fixed right-2 top-[15rem] flex flex-col justify-center items-center transition-all ${FloatBtnAnimeStyles}`}>
        <BiDownArrowAlt className="bg-sky-400/70 rounded-b-xl rounded-t-md text-sky-900 text-3xl hover:bg-sky-400" />
        <span className="text-center text-xs ">
          End
          <br />
          Of
          <br />
          Tech Stack
        </span>
      </div>
    </button>
  );
};
export { ToEndTechStackFloatBtn };
