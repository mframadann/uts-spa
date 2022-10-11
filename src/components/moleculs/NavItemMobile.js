import { CloseMenu, Logo } from "../../assets/svg";

const NavItemMobile = (props) => {
  const { toggle, setToggle, items } = props;
  return (
    <div
      className={`${toggle ? "translate-x-0" : "translate-x-full"} nav-mobile`}
    >
      <div className="nav-head">
        <img src={Logo} alt="logo-ramadan" />
        <img
          src={CloseMenu}
          onClick={() => setToggle(!toggle)}
          alt="logo-ramadan"
          width={30}
          height={30}
        />
      </div>
      <div className="links-wrap">
        <ul>
          {items?.map((item, i) => (
            <li
              className="nav-mmenu-mobile"
              key={i}
              onClick={() => setToggle(!toggle)}
            >
              <a
                href={item.path}
                className={`${
                  item.path === window.location.hash ? "active" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavItemMobile;
