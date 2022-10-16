import "./App.css";
import MoveupBox from "./Components/MoveupBox";
import DynamicSearchFilter from "./Components/DynamicSearchFilter";
import IncrementDecrementButton from "./Components/IncrementDecrementButton";
import Home from "./Components/Home";
import FetchData from "./Components/FetchData";
import ImageCarousal from "./Components/ImageCarousal";
import IntuitCarousal from "./Components/IntuitCarousal";
import { Route, Routes } from "react-router-dom";
import Pagination from "./Components/Pagination";
import UserAuth from "./Components/UserAuth"
import UserAuthRegister from "./Components/UserAuthRegister";
import InputTodo from "./Components/InputTodo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/1" element={<DynamicSearchFilter />}></Route>
      <Route path="/2" element={<IncrementDecrementButton />}></Route>
      <Route path="/3" element={<MoveupBox />}></Route>
      <Route path="/4" element={<FetchData />}></Route>
      <Route path="/5" element={<ImageCarousal />}></Route>
      <Route path="/6" element={<IntuitCarousal />}>
        {" "}
      </Route>
      <Route path="7" element={<Pagination />}></Route>
      <Route path="8" element={<UserAuth />}></Route>
      <Route path="9" element={<UserAuthRegister />}></Route>
      <Route path="10" element={<InputTodo />}></Route>
    </Routes>
  );
}
export default App;
