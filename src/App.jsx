
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MiddleSection from './MiddleSection/MiddleSection';
import featuredDeals from './data/featuredDeals';
import { useEffect, useState } from 'react';
import Others from './components/Others/Others';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className='flex flex-col'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MiddleSection />} />
          </Route>
        </Routes>
      </Router>
      <div className='my-[300px]'>
        <Others loading={loading} featuredDeals={featuredDeals} />
        <Others loading={loading} featuredDeals={featuredDeals} />
        <Others loading={loading} featuredDeals={featuredDeals} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;