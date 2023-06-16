import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./Context/User";
import Rotas from "./routes";



const App = () => {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000} />
      <Rotas />
    </AuthProvider>
  );
};


export default App;
