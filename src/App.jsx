import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ProtectedRoute } from './layout/ProtectedRouter';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/todo" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
