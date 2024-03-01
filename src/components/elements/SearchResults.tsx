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
    <div className="mt-3 w-full mr-[140px]">
      {searchResult.map((restaurant: SearchResultType, index: number) => (
        <div
          onClick={() => {
            navigate(`${routes.home}${restaurant.id}`);
            dispatch(clearSearch());
          }}
          className="flex items-center gap-6 lg:gap-2 py-1 mb-1"
          key={index}
        >
          <div className="min-w-12">
            <img
              src={SearchResultImage}
              alt="resultImage"
              className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] cursor-pointer"
            />
          </div>
          <div className="truncate cursor-pointer">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
