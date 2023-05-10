import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Challenge1 from "./challenge/Challenge1";
import Challenge2 from "./challenge/Challenge2";
import Home from "./pages/Home";

export default function Week3() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Challenge1" element={<Challenge1 />} />
        <Route path="/Challenge2" element={<Challenge2 />} />
      </Route>
    </Routes>
  );
}
