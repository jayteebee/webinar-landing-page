
import logo from "../images/TVElogo.png"
export const HeaderComponent = () => {

  return (
    <header className="flex items-center justify-between px-4 py-2 lg:px-8 bg-white">
      <img src={logo} alt="Logo" className="h-8 md:h-12" />
    </header>
  );
};
