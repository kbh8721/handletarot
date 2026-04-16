/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandStory from './pages/BrandStory';
import Services from './pages/Services';
import Workbook from './pages/Workbook';
import TarotLogbook from './pages/TarotLogbook';
import Reviews from './pages/Reviews';
import Booking from './pages/Booking';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<BrandStory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workbook" element={<Workbook />} />
          <Route path="/tarot" element={<TarotLogbook />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
    </Router>
  );
}
