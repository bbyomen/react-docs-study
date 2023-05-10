import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/challenge1">Challenge1</Link>
          </li>
          <li>
            <Link to="/challenge2">Challenge2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
