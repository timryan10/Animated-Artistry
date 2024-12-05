import Home from "./Home";
import Header from "./Header";
import { Route, Routes } from "react-router-dom"
import Work from "./Work";
import Artist from "./Artist";
import Request from "./Request";
import Auth from "./Auth";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/artist"} element={<Artist />} />
          <Route path={"/work"} element={<Work />} />
          <Route path={"/request"} element={<Request />} />
          <Route path={"/auth"} element={<Auth/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;