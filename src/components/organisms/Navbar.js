import { useRef, useState } from "react";
import { Hamburger, Logo } from "../../assets/svg";
import { NavItemDekstop, NavItemMobile } from "../moleculs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const homeref = useRef();
  const aboutref = useRef();
  const projectsref = useRef();
  const skillsref = useRef();
  const contackref = useRef();

  const handleScroll = (ref) => {
    typeof window != "undefined" &&
      window.scrollTo({
        top: ref?.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
  };

  const items = [
    {
      name: "Home",
      id: "home",
      ref: homeref,
    },
    {
      name: "About",
      id: "about",
      ref: aboutref,
    },
    {
      name: "Skills",
      id: "skills",
      ref: skillsref,
    },
    {
      name: "Projects",
      id: "projects",
      ref: projectsref,
    },
    {
      name: "Contact",
      id: "contack",
      ref: contackref,
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
            className="hamburger"
          />
          <NavItemDekstop items={items} handleScroll={handleScroll} />
        </div>
      </nav>
      <NavItemMobile
        items={items}
        toggle={toggle}
        setToggle={setToggle}
        handleScroll={handleScroll}
      />
    </>
  );
};

export default Navbar;
