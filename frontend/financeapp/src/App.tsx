
import { Outlet } from 'react-router-dom';
import './App.css'
import "react-toastify/ReactToastify.css"
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/UseAuth';

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  )
}

export default App
