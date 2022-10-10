import { useState } from "react";
import { Logo } from "../../assets/svg";
import { NavItemDekstop } from "../moleculs";

const Navbar = () => {
  const [isActive, setIsActive] = useState("#home");

  const items = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Contack",
      path: "#contack",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-menu-wrapper">
        <img src={Logo} alt="muhamad-firly-ramadan" />
        <NavItemDekstop
          items={items}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
