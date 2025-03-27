import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block hover:bg-gray-800 p-2 rounded-md">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="block hover:bg-gray-800 p-2 rounded-md"
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="block hover:bg-gray-800 p-2 rounded-md"
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="block hover:bg-gray-800 p-2 rounded-md"
            >
              Library
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
