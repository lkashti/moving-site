import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import ServicePick from './pages/ServicePick';
import TransportationOrder from './pages/TransportationOrder';

function App() {
  return (
    <div className='bg-gradient-to-br from-cyan-300 via-green-200 bg-opacity-50 to-slate-200 w-full min-h-screen'>
      <BrowserRouter>
        <NavBar />
        <div className='flex flex-col justify-center h-screen'>
          <Routes>
            <Route path="/moving-site" index element={<Welcome />} />
            <Route path="/service-pick" element={<ServicePick />} />
            <Route path="/transportation-order" element={<TransportationOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
