import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { clearSearch } from "../../store/actions/actionCreator";
import { AiOutlineClose } from "react-icons/ai";
import useSearch from "../../hooks/useSearch";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch, isSearchFocused, setIsSearchFocused, handleChange] =
    useSearch();

  return (
    <div className="flex items-center lg:justify-between p-3 border-2 border-gray-400 rounded-full relative z-50 bg-white w-[90vw] md:w-fit">
      <IoSearchSharp size={20} />
      <input
        onFocus={() => {
          setIsSearchFocused(true);
        }}
        onChange={handleChange}
        className="outline-none bg-transparent w-full"
        placeholder="Search"
        type="text"
        value={search}
      />
      {isSearchFocused ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearch("");
            dispatch(clearSearch());
          }}
        >
          <AiOutlineClose size={20} />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
