import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import People from "./pages/People";
import "./styles.css";


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white">
                <nav className="bg-gray-800 p-4 flex gap-4">
                    <Link to="/people">People</Link>
                </nav>

                <div className="container mx-auto p-4">
                    <Routes>
                        <Route path="/people" element={<People />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
