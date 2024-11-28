import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MiddleSection from "./MiddleSection/MiddleSection";
import featuredDeals from "./data/featuredDeals";
import { useEffect, useState } from "react";
import Others from "./components/Others/Others";
import Footer from "./components/Footer";


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
          </Route>

      
          {/* <Route path="/standalone1" element={<StandalonePage1 />} />
          <Route path="/standalone2" element={<StandalonePage2 />} /> */}
        </Routes>
      </Router>

      
      <div className="my-[300px]">
        <Others loading={loading} featuredDeals={featuredDeals} />
        <Others loading={loading} featuredDeals={featuredDeals} />
        <Others loading={loading} featuredDeals={featuredDeals} />
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
