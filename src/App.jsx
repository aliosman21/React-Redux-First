import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();
   return (
      <div className="App">
         <h1>ALI APP</h1>
         <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
         </button>
         <span>{count}</span>
         <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
         </button>
         <Link to="/home">home</Link>
      </div>
   );
}

export default App;
