// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Layout from "./layouts/Layouts";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout <p>Home Page</p>/>} />
//         <Route path="/search" element={<>Search Page</>} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layouts from "./layouts/Layouts"; // Assuming the correct file path and name
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layouts>
              <p>Home Page</p>
            </Layouts>
          }
        />
        <Route
          path="/search"
          element={
            <Layouts>
              <p>Search Page</p>
            </Layouts>
          }
        />
        <Route
          path="/register"
          element={
            <Layouts>
              <Register />
            </Layouts>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
