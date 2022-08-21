import { Provider } from "react-redux";
import CompletedTodos from "./components/CompletedTodos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 pt-20 px-6 font-sans">
                <Navbar />

                <div className="text-center mb-3 text-red-300">
                    Sorry for the incorrect repo link ☹ <br />
                    Here is the correct <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://github.com/Learn-with-Sumit/assignment-4---add-features-to-todo-application-myb12">Repository Link</a>
                </div>

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <Header />

                    <hr className="mt-4" />

                    <TodoList />

                    <hr className="mt-4" />

                    <Footer />
                </div>
            </div>
            <CompletedTodos />
        </Provider>
    );
}

export default App;
