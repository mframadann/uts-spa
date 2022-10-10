import { useState } from "react";
import { Hamburger, Logo } from "../../assets/svg";
import { NavItemDekstop, NavItemMobile } from "../moleculs";

const Navbar = () => {
  const [isActive, setIsActive] = useState("#home");
  const [toggle, setToggle] = useState(false);

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
    <>
      <nav className="navbar">
        <div className="nav-menu-wrapper">
          <img src={Logo} alt="muhamad-firly-ramadan" />
          <img
            src={Hamburger}
            width="30"
            height="30"
            alt="hamburger-menu"
            onClick={() => setToggle(!toggle)}
          />
          <NavItemDekstop
            items={items}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </nav>
      <NavItemMobile toggle={toggle} setToggle={setToggle} items={items} />
    </>
  );
};

export default Navbar;
