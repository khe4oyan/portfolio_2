// libs
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
// import ArchivePage from './pages/ArchivePage';
import ChessnoorPage from './pages/ChessnoorPage';
import NotFoundPage from "./pages/NotFoundPage";

// components
import MouseBox from "./components/MouseBox/MouseBox";

// routes
import ROUTES from "./pages/routes";

// styles
import "./css/general.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        {/* <Route path={ROUTES.ARCHIVE} element={<ArchivePage />}/> */}
        <Route path={ROUTES.CHESSNOOR} element={<ChessnoorPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
      <MouseBox />
    </div>
  );
}

export default App;
