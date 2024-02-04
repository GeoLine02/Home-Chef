import Search from "../components/blocks/Search/Search";
import Location from "../components/elements/Location";
import SearchBar from "../components/elements/SearchBar";
import Slogan from "../components/elements/Slogan";
import SearchResults from "../components/elements/SearchResults";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { focuseSearch } from "../store/actions/actionCreator";
import SaleList from "../components/blocks/SaleList/SaleList";
import Filter from "../components/blocks/Filter/Filter";
import AllRestaurants from "../components/blocks/AllRestaurants/AllRestaurants";
import FilteredRestaurants from "../components/blocks/FilteredRestaurants/FilteredRestaurants";
import FilteredRestaurantCategoryList from "../components/blocks/RestaurantFilterCategories/FilteredRestaurantCategoryList";
import { RootState } from "../store/state/rootReducers";
const Home = () => {
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector(
    (state: RootState) => state.restaurants.filteredRestaurants
  );
  const isSearchFocused = useSelector(
    (state: RootState) => state.search.isSearchFocused
  );
  if (isSearchFocused) {
    return (
      <div className="px-6 lg:hidden">
        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              dispatch(focuseSearch());
            }}
          >
            {<AiOutlineArrowLeft size={25} />}
          </div>
          <h1 className="text-xl font-medium">Search</h1>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4">
          <div>
            <SearchBar />
          </div>
          <div>
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="hidden bg-[#EEEEEE] px-32 py-6 lg:flex justify-center">
          <Slogan />
        </div>
        <div className="lg:grid lg:grid-flow-col gap-6 lg:px-14">
          <div className="lg:col-span-1">
            <Filter />
          </div>
          <div className="col-span-4">
            <div className="lg:hidden">
              <Search />
            </div>
            <div className="lg:hidden flex md:flex-row md:gap-20 flex-col justify-center items-center gap-4 mt-6">
              <Location />
              <div
                onClick={() => {
                  dispatch(focuseSearch());
                }}
              >
                <SearchBar />
              </div>
            </div>
            <div>
              <SaleList />
            </div>
            <div className="mt-6">
              <FilteredRestaurantCategoryList />
            </div>
            <div className="mt-6">
              {filteredRestaurants ? (
                <FilteredRestaurants />
              ) : (
                <AllRestaurants />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
