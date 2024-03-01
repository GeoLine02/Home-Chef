import menu from "../../constants/menu";

const Menu = () => {


  return (
    <div className="block gap-3">
      {menu.map((category, index) => (
        <ul key={index}>
          <li className="py-2 cursor-pointer">{category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
