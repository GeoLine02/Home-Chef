import menu from "../../constants/menu";

const Menu = () => {
  return (
    <div>
      {menu.map((category, index) => (
        <ul key={index}>
          <li>{category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
