import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex4 from "./pages/Ex4";
import Ex5 from "./pages/Ex5";
import Ex6 from "./pages/Ex6";
import Home from "./pages/Home";
import NoEffect1 from "./pages/NoEffect1";
import NoEffect2 from "./pages/NoEffect2";
import NoEffect3 from "./pages/NoEffect3";

export default function Week6() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex4" element={<Ex4 />} />
        <Route path="/ex5" element={<Ex5 />} />
        <Route path="/ex6" element={<Ex6 />} />
        <Route path="/noeffect1" element={<NoEffect1 />} />
        <Route path="/noeffect2" element={<NoEffect2 />} />
        <Route path="/noeffect3" element={<NoEffect3 />} />
      </Route>
    </Routes>
  );
}
