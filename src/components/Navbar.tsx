const Navbar = () => {
  return (
    <nav className="bg-sky-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="logo">thing</div>
        <ul className="flex flex-col sm:flex-row sm:gap-x-2">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
