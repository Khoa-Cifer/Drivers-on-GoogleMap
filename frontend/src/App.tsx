import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/page/Dashboard";
import Taskbar from './components/layout/Taskbar';
import DeliveryList from './components/page/DeliveryList';
import OnFleetDrivers from './components/page/OnFleetDrivers';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App bg-[#E6F9FD]">
      <main className='flex'>
        <Router>
          <Taskbar />
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/delivery-logs' element={<DeliveryList />}></Route>
            <Route path='/on-fleet-drivers' element={<OnFleetDrivers />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;