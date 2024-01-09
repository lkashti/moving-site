import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import ServicePick from './pages/ServicePick';
import TransportationOrder from './pages/TransportationOrder';
import { doc } from 'prettier';

function App() {
  return (
    <div className='bg-zinc-400/60 w-full min-h-screen'>
      <BrowserRouter>
        <NavBar />
        <div className='flex flex-col justify-center items-center h-screen'>
          <Routes>
            <Route path="/moving-site" index element={<Welcome />} />
            <Route path="/service-pick" element={<ServicePick />} />
            <Route path="/transportation-order" element={<TransportationOrder />} />
            <Route path="*"/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
