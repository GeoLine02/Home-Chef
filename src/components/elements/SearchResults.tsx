import { useSelector } from "react-redux";
import { SearchResultType } from "../../store/reducers/searchReducer";
import SearchResultImage from "../../assets/Monogram.svg";
const SearchResults = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchResult = useSelector((state: any) => state.search.search);
  return (
    <div className="mt-3 w-full">
      {searchResult.map((restaurant: SearchResultType, index: number) => (
        <div
          className="flex items-center gap-2 py-1 bg-gray-200 md:bg-transparent mb-1"
          key={index}
        >
          <div className="min-w-12">
            <img src={SearchResultImage} alt="resultImage" />
          </div>
          <div className="truncate">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
