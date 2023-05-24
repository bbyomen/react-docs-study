import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Challenge1 from "./challenge/Challenge1";
import Home from "./pages/Home";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import ForwardRef from "./pages/ForwardRef";
import Imperative from "./pages/Imperative";
import Sync from "./pages/Sync";

export default function Week4() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/forwardRef" element={<ForwardRef />} />
        <Route path="/imperative" element={<Imperative />} />
        <Route path="/sync" element={<Sync />} />
        <Route path="/Challenge1" element={<Challenge1 />} />
      </Route>
    </Routes>
  );
}
