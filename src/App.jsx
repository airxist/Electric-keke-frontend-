import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Support from "./pages/Support";
import ProtectedRoute from "./layouts/Private";
import InternalServer from "./pages/InternalServer";
import Loader from "./components/loaders/Loader";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import Alert from "./components/Alert";
import Balls from "./components/_custom-loaders/balls/Balls";

function App() {
  const {
    alert: { show },
    loading,
  } = useSelector((state) => state.global);

  return (
    <>
      <div className="App max-w-screen-2xl overflow-hidden mx-auto relative">
        <AnimatePresence>
          {show && <Alert />}
          {loading && (
            <Loader
              className="fixed top-5 right-5 z-50"
              type="spin2"
              size={30}
            />
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/onboarding/*" element={<Onboarding />} />
          <Route path="/*" element={<ProtectedRoute />} />
          <Route path="/ie/:id" element={<InternalServer />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/test"
            element={
              <section className="w-full h-screen">
                <button className="p-2 relative after:absolute after:bg-green-300 after:inset-0 after:z-0">
                  <h6 className="z-10 relative">BUTTON </h6>
                </button>
                <Balls />
              </section>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
