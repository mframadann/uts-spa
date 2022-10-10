import React from "react";

const NavItemDekstop = (props) => {
  const { items, isActive, setIsActive } = props;
  return (
    <div className="nav-menu-dekstop">
      {items?.map((item, i) => (
        <a
          href={item.path}
          key={i}
          className={`${
            isActive === item.path ? "active" : ""
          } nav-link-dekstop`}
          onClick={() => setIsActive(item.path)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default NavItemDekstop;
