import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <h1>TODO</h1>
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    );
};

export default App;
