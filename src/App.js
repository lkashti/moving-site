import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import ServicePick from './pages/ServicePick';
import TransportationOrder from './pages/TransportationOrder';

function App() {
  return (
    <div className='bg-gradient-to-br from-indigo-300 from-30% to-slate-300 w-full h-screen'>
      <div className='flex flex-col items-center md:h-full '>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/moving-site" index element={<Welcome />} />
            <Route path="/service-pick" element={<ServicePick />} />
            <Route path="/transportation-order" element={<TransportationOrder />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
