import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/event1">Event1</Link>
          </li>
          <li>
            <Link to="/event2">Event2</Link>
          </li>
          <li>
            <Link to="/event3">Event3</Link>
          </li>
          <li>
            <Link to="/StateInReact">State In React</Link>
          </li>
          <li>
            <Link to="/RenderAndCommit">Render & Commit</Link>
          </li>
          <li>
            <Link to="/Snapshot">Snapshot</Link>
          </li>
          <li>
            <Link to="/QueueingUpdates">QueueingUpdates</Link>
          </li>
        </ul>
      </nav>
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
