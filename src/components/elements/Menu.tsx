import menu from "../../constants/menu";
import { text } from "../../helpers/functions";

const Menu = () => {
  return (
    <div className="block gap-3">
      <ul className="flex gap-4 max-w-xs md:max-w-3xl overflow-x-auto lg:block">
        {menu.map((category) => (
          <li
            key={category}
            className="py-1 px-2 cursor-pointer text-nowrap border-gray-400 border-2 rounded-md lg:border-none "
          >
            {text(`MENU_ITEM_${category}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
