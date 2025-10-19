import NavButtons from "./nav-buttons";
import NavSheet from "./nav-sheet";

const Nav = () => {
  return (
    <nav className="mt-6 h-20 fixed  z-50 top-2 w-full  flex justify-center items-center text-[#fafafa]">
      <div className="backdrop-blur-md rounded-full shadow-lg border border-muted-foreground w-full max-w-screen-lg flex justify-between items-center p-6">
        <span className="text-lg space-mono-regular">barkov</span>
        <div className="flex gap-2">
          <div className="hidden md:flex items-center">
            <NavButtons />
          </div>
          <div className="hidden md:flex">{/* <ModeToggle /> */}</div>
          <div className="md:hidden">
            <NavSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
