import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Ships from '@/pages/Ships';
import Destinations from '@/pages/Destinations';
import Packages from '@/pages/Packages';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ships" element={<Ships />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="packages" element={<Packages />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
