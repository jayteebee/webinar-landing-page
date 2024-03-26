// src/components/Navbar.js
import logo from "../images/ThermalVision_logo.png"

export const Navbar = () => {
    return (
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <span className="text-white font-bold text-lg">Thermal Vision Research</span> */}
            <img src={logo} alt="Thermal Vision Research" className="w-32" />
        </div>
      </nav>
    );
  };
  