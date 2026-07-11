import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import Captura2 from './pages/Captura2';
import Modelo3D from './pages/Modelo3D';
import Practica from './pages/Practica';
import TraianguloDeExposiciN from './pages/TraianguloDeExposiciN';
import FotografiaBasica from './pages/FotografiaBasica';
import PantallaDeInicio from './pages/PantallaDeInicio';
import IniciarSesion from './pages/IniciarSesion';
import Bienvenida from './pages/Bienvenida';
import Pantalla4 from './pages/Pantalla4';
import Pantalla42 from './pages/Pantalla42';
import Pantalla3 from './pages/Pantalla3';
import Pantalla2 from './pages/Pantalla2';
import Pantalla1 from './pages/Pantalla1';
import CrearCuenta from './pages/CrearCuenta';
import ContraseAActualizada from './pages/ContraseAActualizada';
import NuevaContraseA from './pages/NuevaContraseA';
import VerificarCodigo from './pages/VerificarCodigo';
import RecuperarContraseA from './pages/RecuperarContraseA';
import ReglaDeTercio from './pages/ReglaDeTercio';
import Practica1 from './pages/Practica1';
import CamaraAr1 from './pages/CamaraAr1';
import Progreso from './pages/Progreso';
import Perfil from './pages/Perfil';
import PagoExitoso2 from './pages/PagoExitoso2';
import Pago2 from './pages/Pago2';
import PagoExitoso1 from './pages/PagoExitoso1';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-muted border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Pantalla1 />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Captura2" element={<Captura2 />} />
      <Route path="/Modelo3D" element={<Modelo3D />} />
      <Route path="/Practica" element={<Practica />} />
      <Route path="/TraianguloDeExposiciN" element={<TraianguloDeExposiciN />} />
      <Route path="/FotografiaBasica" element={<FotografiaBasica />} />
      <Route path="/PantallaDeInicio" element={<PantallaDeInicio />} />
      <Route path="/IniciarSesion" element={<IniciarSesion />} />
      <Route path="/Bienvenida" element={<Bienvenida />} />
      <Route path="/Pantalla4" element={<Pantalla4 />} />
      <Route path="/Pantalla42" element={<Pantalla42 />} />
      <Route path="/Pantalla3" element={<Pantalla3 />} />
      <Route path="/Pantalla2" element={<Pantalla2 />} />
      <Route path="/Pantalla1" element={<Pantalla1 />} />
      <Route path="/CrearCuenta" element={<CrearCuenta />} />
      <Route path="/ContraseAActualizada" element={<ContraseAActualizada />} />
      <Route path="/NuevaContraseA" element={<NuevaContraseA />} />
      <Route path="/VerificarCodigo" element={<VerificarCodigo />} />
      <Route path="/RecuperarContraseA" element={<RecuperarContraseA />} />
      <Route path="/ReglaDeTercio" element={<ReglaDeTercio />} />
      <Route path="/Practica1" element={<Practica1 />} />
      <Route path="/CamaraAr1" element={<CamaraAr1 />} />
      <Route path="/Progreso" element={<Progreso />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/PagoExitoso2" element={<PagoExitoso2 />} />
      <Route path="/Pago2" element={<Pago2 />} />
      <Route path="/PagoExitoso1" element={<PagoExitoso1 />} />
      {/* Add your page Route elements here */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App