import { useEffect, useState } from "react";
import logo from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearchSuggestions } from "../features/search/redux/searchThunks";
import { removeFromCache } from "../features/search/redux/searchSuggestionsSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.searchSuggestion.cache);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setDropdownVisible(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
    setDropdownVisible(false);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0 || searchHistory?.length > 0)
      setDropdownVisible(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setDropdownVisible(false), 150);
  };

  const removeHistoryHandler = (itemToRemove) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToRemove
    );

    setSearchHistory(updatedHistory);
    localStorage.setItem("search_query", JSON.stringify(updatedHistory));
    dispatch(removeFromCache(itemToRemove));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
      let updateHistory = [...searchHistory];
      if (!updateHistory.includes(searchQuery)) {
        updateHistory.push(searchQuery);
      }
      localStorage.setItem("search_query", JSON.stringify(updateHistory));
      setSearchHistory(updateHistory);

      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("search_query")) || [];
    setSearchHistory(storedHistory);
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setDropdownVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        dispatch(fetchSearchSuggestions(searchQuery));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-black p-2 flex items-center justify-between py-4">
      <div className="flex items-center">
        <button
          onClick={() => dispatch(toggleMenu())}
          className="mr-4 cursor-pointer"
        >
          ☰
        </button>
        <Link to="/">
          <img src={logo} alt="logo" className="w-24" />
        </Link>
      </div>

      <form className="flex items-center w-2/5" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="border-gray-300 border text-black p-2 rounded-l-3xl w-4/5 focus:outline-none"
        />
        <button
          type="submit"
          className="border-gray-300 border p-2 rounded-r-3xl w-1/5 cursor-pointer"
        >
          Search
        </button>

        {dropdownVisible && (
          <div className="fixed bg-white w-96 shadow-lg p-2 rounded-lg top-16 z-50 border border-gray-300">
            {suggestions.length > 0 &&
              suggestions.map((s) => (
                <div
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="py-2 hover:bg-gray-100 cursor-pointer"
                >
                  &#128269; {s}
                </div>
              ))}
            {!suggestions.length > 0 && searchHistory?.length > 0 && (
              <div className="mt-2">
                <h3 className="font-semibold">Search History</h3>
                {searchHistory.map((item) => (
                  <div
                    className="flex justify-between items-center hover:bg-gray-100 px-2 rounded"
                    key={item}
                  >
                    <span
                      key={item}
                      onClick={() => handleSuggestionClick(item)}
                      className="py-2  cursor-pointer"
                    >
                      &#128269; {item}
                    </span>
                    <span
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => removeHistoryHandler(item)}
                    >
                      Remove
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </form>

      <button className="ml-4">👤</button>
    </header>
  );
}

export default Header;
