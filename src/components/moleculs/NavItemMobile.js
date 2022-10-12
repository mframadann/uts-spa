import { CloseMenu, Logo } from "../../assets/svg";
import { useScrollspy } from "../../helpers/HandleScroll";

const NavItemMobile = (props) => {
  const { toggle, setToggle, items, handleScroll } = props;

  const activeId = useScrollspy(
    items.map((item) => item.id),
    250
  );

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
              onClick={() => {
                setToggle(!toggle);
                handleScroll(item.ref.current);
              }}
            >
              <a
                href={`#${item.id}`}
                className={`${item.id === activeId ? "active" : ""}`}
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
