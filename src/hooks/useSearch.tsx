import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { http } from "../helpers/http";
import { clearSearch, handleSearch } from "../store/actions/actionCreator";

const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search.length == 0) {
      dispatch(clearSearch());
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search.length) {
          const apiCallOptions = {
            headers: {
              "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ searchText: search }),
          };

          const res = await http("/search", apiCallOptions);
          const parsedRes = await res.json();

          if (parsedRes.length) {
            dispatch(handleSearch(parsedRes));
          }
        } else {
          dispatch(clearSearch());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [search, dispatch]);

  return [
    search,
    setSearch,
    isSearchFocused,
    setIsSearchFocused,
    handleChange,
  ] as const;
};

export default useSearch;
