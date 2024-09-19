import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import { Error404, Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
