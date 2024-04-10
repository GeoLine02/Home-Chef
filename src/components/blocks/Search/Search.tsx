import Logo from "../../elements/Logo";
import SearchBar from "../../elements/SearchBar";
import SearchResults from "../../elements/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state/rootReducers";
const Search = () => {
  const searchResult = useSelector((state: RootState) => state.search.search);
  return (
    <div className="hidden lg:flex lg:gap-7">
      <Logo />
      <div className="relative"></div>
      <div className="relative">
        <SearchBar />
        {searchResult.length !== 0 ? (
          <div className="absolute top-6 w-full bg-gray-200 whitespace-nowrap rounded-b-2xl h-40 z-20 p-3 overflow-x-hidden">
            <SearchResults />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
