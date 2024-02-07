import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchResultType } from "../../store/reducers/searchReducer";
import SearchResultImage from "../../assets/Monogram.svg";
import { RootState } from "../../store/state/rootReducers";
import routes from "../../constants/routes";
import { clearSearch } from "../../store/actions/actionCreator";

const SearchResults = () => {
  const searchResult = useSelector((state: RootState) => state.search.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mt-3 w-full">
      {searchResult.map((restaurant: SearchResultType, index: number) => (
        <div
          onClick={() => {
            navigate(`${routes.home}${restaurant.id}`);
            dispatch(clearSearch());
          }}
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
