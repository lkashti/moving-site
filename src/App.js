import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import ServicePick from './pages/ServicePick';
import TransportationOrder from './pages/TransportationOrder';

function App() {
  return (
    <div>
      <div className='bg-slate-200 w-full h-screen'>
        <div className='flex items-center justify-center'>
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
    </div>
  );
}

export default App;
