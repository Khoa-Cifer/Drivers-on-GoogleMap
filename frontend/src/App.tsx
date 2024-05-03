import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./page/Dashboard";
import FeaturesAccessing from './layout/FeaturesAccessing';

function App() {

  return (
    <div className="App bg-[#E6F9FD]">
      <main className='flex'>
        <FeaturesAccessing />
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;