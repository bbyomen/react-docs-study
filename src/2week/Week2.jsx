import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Home from "./pages/Home";
import NoMatch from "../Components/NoMatch";
import StateInReact from "./pages/StateInReact";
import RenderAndCommit from "./pages/RenderAndCommit";
import Snapshot from "./pages/Snapshot";
import QueueingUpdates from "./pages/QueueingUpdates";
import Challenge1 from "./challenge/challenge1";
import Challenge2Presenter from "./challenge/Challenge2Presenter";

export default function Week2() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/event1" element={<Event1 />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/event3" element={<Event3 />} />
        <Route path="/StateInReact" element={<StateInReact />} />
        <Route path="/RenderAndCommit" element={<RenderAndCommit />} />
        <Route path="/Snapshot" element={<Snapshot />} />
        <Route path="/QueueingUpdates" element={<QueueingUpdates />} />
        <Route path="/Challenge1" element={<Challenge1 />} />
        <Route path="/Challenge2" element={<Challenge2Presenter />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
