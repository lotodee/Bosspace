import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MiddleSection from "./MiddleSection/MiddleSection";
import featuredDeals from "./data/featuredDeals";
import { useEffect, useState } from "react";
import Others from "./components/Others/Others";
import Footer from "./components/Footer";
import BlogPage from "./pages/blog-page/BlogPage";
import Forums from "./pages/forums/Forums";
import Startup from "./pages/startup/Startup";
import Connect from "./pages/connect/Connect";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="flex flex-col">
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<MiddleSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/Forums" element={<Forums />} />
            <Route path="/Startup" element={<Startup/>} />
            <Route path="/Connect" element={<Connect />} />
          </Route>

      
          {/* <Route path="/standalone1" element={<StandalonePage1 />} />
          <Route path="/standalone2" element={<StandalonePage2 />} /> */}
        </Routes>
      </Router>

     
  

      {/* Footer */}

    </div>
  );
}

export default App;
