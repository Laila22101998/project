import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ProtectedRoute } from './component/layout/ProtectedRouter';
import Login from './component/pages/login/Login';
// import Layout from './component/layout/Layout';
import Dashboard from './component/pages/dashboard/Dashboard';
import Home from './component/pages/home/home';


function App() {

  return (
    <>
        <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard/>} />
            <Route path="/todo" element={<Home/>} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
