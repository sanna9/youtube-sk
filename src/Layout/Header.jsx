import { useState } from "react";
import logo from "../assets/youtube.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-white-800 shadow-md text-black p-2 flex items-center justify-between">
      <div className="flex items-center">
        <button className="mr-4">☰</button>{" "}
        <img src={logo} alt="logo" className="w-24" />
      </div>

      <form onSubmit={handleSearch} className="flex items-center w-96">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-gray-300 border text-black p-2 rounded-l-3xl w-4/5"
        />
        <button
          type="submit"
          className="border-gray-300 border p-2 rounded-r-3xl w-1/5"
        >
          Search
        </button>
      </form>
      <div>
        <button className="ml-4">👤</button>
      </div>
    </header>
  );
}

export default Header;
