import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/counterSlice";
import "./App.css";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="counter-box">
                <h1>Value: {count}</h1>
                <div className="buttons">
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>
    );
}

export default App;
