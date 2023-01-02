import {  RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/route';

function App() {
  
  return (
    <div className="bg-gray-100">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
