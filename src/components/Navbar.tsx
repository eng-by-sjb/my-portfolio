import { links } from "../data";
import { useNavScroll } from "./navbar_custom_hook";

const Navbar = () => {
  const { isScrollDown } = useNavScroll();

  return (
    <nav
      className={`fixed w-screen z-50 top-0 transition-all overflow-hidden ease-out sm:h-auto ${
        isScrollDown ? "h-[68px] duration-[500ms]" : "h-[114px] duration-300"
      } ${
        window.scrollY <= 3 ? "bg-sky-100" : "shadow rounded-b-lg bg-sky-100/90 backdrop-blur-lg"
      }`}>
      <div className="mx-auto max-w-7xl px-16 py-4 flex flex-col text-center sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl">
          FullStack
          <span className="text-sky-600 font-semibold">Dev</span>
        </h2>

        <div
          className={`transition duration-300 ease-out sm:scale-100 sm:h-auto sm:opacity-100 ${
            isScrollDown
              ? "overflow-hidden duration-[500ms] opacity-0 scale-90"
              : "overflow-hidden duration-300 opacity-100"
          }`}>
          <div className="px-2 mt-4 flex gap-x-3 justify-center sm:mt-0">
            {links.map(({ href, id, text }) => {
              return (
                <a
                  key={id}
                  className="capitalize tracking-wide transition duration-300 ease-in hover:scale-110 hover:text-sky-600"
                  href={href}>
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
