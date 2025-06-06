import { useEffect, useState } from "react";
import logo from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearchSuggestions } from "../features/search/redux/searchThunks";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search.cache);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      return;
    }

    const timer = setTimeout(() => {
      if (!searchCache[searchQuery]) {
        dispatch(fetchSearchSuggestions(searchQuery));
      } else {
        setSuggestions(searchCache[searchQuery]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-black p-2 flex items-center justify-between py-4">
      <div className="flex items-center">
        <button
          className="mr-4 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        >
          ☰
        </button>{" "}
        <Link to="/">
          <img src={logo} alt="logo" className="w-24" />
        </Link>
      </div>

      <form className="flex items-center w-2/5" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-gray-300 border text-black p-2 rounded-l-3xl w-4/5 focus:outline-none"
        />
        <button
          type="submit"
          className="border-gray-300 border p-2 rounded-r-3xl w-1/5"
        >
          Search
        </button>
        {suggestions.length > 0 && (
          <div className="fixed bg-white w-96 shadow-lg p-2 rounded-lg top-16 z-50 border border-gray-300">
            {suggestions.map((s) => (
              <div key={s} className="py-2 hover:bg-gray-100 cursor-pointer">
                &#128269; {s}
              </div>
            ))}
          </div>
        )}
      </form>
      <div>
        <button className="ml-4">👤</button>
      </div>
    </header>
  );
}

export default Header;