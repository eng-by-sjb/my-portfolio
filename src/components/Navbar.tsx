import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="mx-auto max-w-7xl px-16 py-4 flex flex-col text-center sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl">
          FullStack
          <span className="text-sky-600 font-semibold">Dev</span>
        </h2>

        <div className="mt-4 flex gap-x-3 justify-center sm:flex-row sm:mt-0">
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
    </nav>
  );
};
export default Navbar;
