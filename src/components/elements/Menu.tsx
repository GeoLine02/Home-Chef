import menu from "../../constants/menu";
import { text } from "../../helpers/functions";

const Menu = () => {
  return (
    <div className="block gap-3">
      {menu.map((category, index) => (
        <ul key={index}>
          <li className="py-2 cursor-pointer">
            {text(`MENU_ITEM_${category}`)}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
