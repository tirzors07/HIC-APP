<<<<<<< HEAD
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import { Navbar } from "./components/navbar.jsx";
import SeguimientoPedido from './pages/order_tracking/SeguimientoPedido.jsx'; 
import UploadComponent from "./pages/request_order/UploadComponent.jsx";
import Login from "./pages/login/login"; // Importas solo el componente Login
import Register from "./pages/register/registrar_usuario_general.jsx" //Importacion de pagina de registro
import UserProfile from "./pages/user_profile/user_profile.jsx"
import logo from './assets/logo.png'; 
import { PharmacyContextProvider } from "./context/pharmacy-context";

function App() {
  return (
    <PharmacyContextProvider>
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col w-screen items-center">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center w-full rounded-3xl">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo de la Empresa" className="h-20" />
            </Link>
          </div>
          <Link 
            to="/login" 
            className="text-black bg-green-500 rounded-2xl px-4 py-1 hover:bg-yellow-400 motion-safe:hover:scale-110 transform transition-transform duration-300">
            Acceder
          </Link>
        </header>
      
        <main className="flex-grow container w-screen p-4">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/cargar-receta" element={<UploadComponent />} />
            <Route path="/seguimiento-pedido" element={<SeguimientoPedido />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />  
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4 w-screen">
          <p>&copy; 2024 Farmacia Online. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
    </PharmacyContextProvider>
  );
};
export default App;
=======
import "./App.css";
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import logo from './assets/logo.png'; 
import { Navbar } from "./components/navbar.jsx";
//Shared pages
import UserProfile from "./pages/user_profile/user_profile.jsx"
import HomePage from './pages/home/HomePage.jsx'; 

//General user pages
import HistorialOrdenes from "./pages/historial_ordenes/historial_ordenes.jsx";
import Register from "./pages/register/registrar_usuario_general.jsx" //Importacion de pagina de registro
import LoginGeneral from "./pages/login/login_general.jsx" //Login para usuarios generales
import SeguimientoPedido from './pages/order_tracking/SeguimientoPedido.jsx'; 
import UploadComponent from "./pages/request_order/UploadComponent.jsx";

//Admin pages
import Login from "./pages/login/login"; // Login para administradores
import VerUsuarios from "./pages/admin_pages/VerUsuarios.jsx"
import VerOrdenes from "./pages/admin_pages/VerOrdenes.jsx"

import { PharmacyContextProvider } from "./context/pharmacy-context";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect( () => {
      const user = JSON.parse(localStorage.getItem("usuarioActual"));
      setCurrentUser(user);
  }, []);

  const handleUserButton = () => {
    if(currentUser === null){
      window.location.href = "/login_g";
    } else {
      setIsMenuOpen( (prev) => !prev );
    }
  };

  const handleMenuOption = (option) => {
    setIsMenuOpen(false);
    if( option === "profile" ){
      window.location.href = "/user-profile";
    }else if( option === "orders" ){
      window.location.href = "/user-orders";
    } else if( option === "logout"){
      localStorage.removeItem("usuarioActual");
      setCurrentUser(null);
      window.location.href = "/";
    }
  };

  return (
    <PharmacyContextProvider>
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col w-screen items-center">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center w-full rounded-3xl">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo de la Empresa" className="h-20" />
            </Link>
          </div>
          <div className="relative">
            <button
              onClick={handleUserButton} 
              className="text-black bg-green-500 rounded-2xl px-4 py-1 hover:bg-yellow-400 motion-safe:hover:scale-110 transform transition-transform duration-300">
              {currentUser ? `Hola ${currentUser.name_}` : 'Iniciar Sesión'}
            </button>
            {isMenuOpen && currentUser && (
              <div className="absolute right-0 mt-2 w-48 bg-blue-500 border border-gray-300 rounded-lg shadow-lg z-50">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-blue-700 cursor-pointer"
                    onClick={()=> handleMenuOption("profile")}
                    >
                      Ver Perfil
                    </li>
                    <li
                    className="px-4 py-2 hover:bg-blue-700 cursor-pointer"
                    onClick={()=> handleMenuOption("orders")}
                    >
                      Historial de Ordenes
                    </li>
                    <li
                    className="px-4 py-2 hover:bg-blue-700 cursor-pointer"
                    onClick={()=> handleMenuOption("logout")}
                    >
                      Cerrar Sesión
                    </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main className="flex-grow container w-screen p-4">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/ver_usuarios" element={<VerUsuarios />} />
            <Route path="/ver_ordenes" element={<VerOrdenes />} />
            <Route path="/cargar-receta" element={<UploadComponent />} />
            <Route path="/seguimiento-pedido" element={<SeguimientoPedido />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login_g" element={<LoginGeneral />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-orders" element={<HistorialOrdenes />} />
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4 w-screen">
          <p>&copy; 2024 Farmacia Online. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
    </PharmacyContextProvider>
  );
};
export default App;
>>>>>>> 923ba6533f5e17b618d4d7d9644d003d21a31a1d
