
import { Outlet } from 'react-router-dom';
import './App.css';
import Dasboardview from './components/Dasboardview';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex h-screen w-full'>
      <div className='basis-[12%] h-[100vh] '>
        <Sidebar />
      </div>
      <div className='basis-[88%] broder h-[100vh] overflow-scroll'>
        <Dasboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
