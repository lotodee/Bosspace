
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MiddleSection from './MiddleSection/MiddleSection';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MiddleSection />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;