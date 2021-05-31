import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function Home() {
   const count = useSelector((state) => state.counter.value);

   return (
      <div className="App">
         <h1>ALI HOME</h1>
         <span>{count}</span>
      </div>
   );
}

export default Home;
