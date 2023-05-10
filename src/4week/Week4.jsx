import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Challenge1 from "./challenge/Challenge1";
import Challenge2 from "./challenge/Challenge2";
import Home from "./pages/Home";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex4 from "./pages/Ex4";
import Ex5 from "./pages/Ex5";
import MyComponent from "./pages/MyComponent";
import Ex6 from "./pages/Ex6";
import Ex7 from "./pages/Ex7";
import ReducerTutorial from "./pages/ReducerTutorial";
import NeedReducer from "./pages/NeedReducer";
// import Reducer from "./pages/Reducer";

export default function Week4() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex4" element={<Ex4 />} />
        <Route path="/ex5" element={<Ex5 />} />
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/ex6" element={<Ex6 />} />
        <Route path="/ex7" element={<Ex7 />} />
        <Route path="/reducer-tutorial" element={<ReducerTutorial />} />
        <Route path="/need-reducer" element={<NeedReducer />} />
        <Route path="/Challenge1" element={<Challenge1 />} />
        <Route path="/Challenge2" element={<Challenge2 />} />
      </Route>
    </Routes>
  );
}
