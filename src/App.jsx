import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/create" element={<CreateBlog />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;