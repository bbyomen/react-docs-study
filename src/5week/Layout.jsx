import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/ex1">Ex1</Link>
          </li>
          <li>
            <Link to="/ex2">Ex2</Link>
          </li>
          <li>
            <Link to="/ex3">Ex3</Link>
          </li>
          <li>
            <Link to="/forwardRef">forwardRef</Link>
          </li>
          <li>
            <Link to="/imperative">imperative</Link>
          </li>
          <li>
            <Link to="/sync">sync</Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/challenge1">Challenge1</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
