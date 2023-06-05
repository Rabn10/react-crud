import {Routes, Route, Link } from 'react-router-dom';
import Home from "../Components/home";
import Dashboard from '../Components/dashboard';
import AuthUser from '../Components/AuthUser';


function Auth() {

  const {token,logout} = AuthUser();
  const logoutUser = () => {
    if(token !== undefined){
      logout();
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <span role='button' className="nav-link" onClick={logoutUser}>Logout</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> 
       </div>
      
    </>
  );
}

export default Auth;
