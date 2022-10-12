import { useScrollspy } from "../../helpers/HandleScroll";

const NavItemDekstop = (props) => {
  const { items, handleScroll } = props;

  const activeId = useScrollspy(
    items.map((item) => item.id),
    250
  );

  console.log(activeId);
  return (
    <div className="nav-menu-dekstop">
      {items?.map((item, i) => (
        <a
          href={`#${item.id}`}
          key={i}
          className={`${activeId === item.id ? "active" : ""} nav-link-dekstop`}
          onClick={() => handleScroll(item.ref.current)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default NavItemDekstop;
