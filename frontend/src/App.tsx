import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/page/Dashboard";
import Taskbar from './components/layout/Taskbar';
import DeliveryList from './components/page/DeliveryList';
import OnFleetDrivers from './components/page/OnFleetDrivers';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './components/auth/AuthProvider';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';

function App() {

  return (
    <div className="App bg-[#E6F9FD]">
      <AuthProvider>
        <main className='flex'>
          <Router>
            <Taskbar />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/delivery-logs' element={<DeliveryList />}></Route>
              <Route path='/on-fleet-drivers' element={<OnFleetDrivers />}></Route>
              <Route path='/register-customer' element={<Registration role={"ROLE_CUSTOMER"} />}></Route>
              <Route path='/register-driver' element={<Registration role={"ROLE_DRIVER"} />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </Router>
        </main>
      </AuthProvider>

    </div>
  );
}

export default App;