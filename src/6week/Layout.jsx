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
            <Link to="/ex4">Ex4</Link>
          </li>
          <li>
            <Link to="/ex5">Ex5</Link>
          </li>
          <li>
            <Link to="/ex6">Ex6</Link>
          </li>
          <li>
            <Link to="/noeffect1">NoEffect1</Link>
          </li>
          <li>
            <Link to="/noeffect2">NoEffect2</Link>
          </li>
          <li>
            <Link to="/noeffect3">NoEffect3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
