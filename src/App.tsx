import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

function App() {
  const LandPage = () => {
    // Redirect to the desired website
    window.location.href = 'https://linkvitation.vercel.app/';

    // Return null to avoid rendering any elements
    return null;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/order-v1" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
