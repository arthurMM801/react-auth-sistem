import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokem, setTokem] = useState('');
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();


  const loggedUser = {
    name: "",
    tokem: ""
  }

  // Recupera usuario logado
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      let recoveredUser = JSON.parse(user)
      setIsAuthenticated(true)
      setTokem(recoveredUser.tokem)
    }

    setLoading(false)
  }, [])

  async function login(email, password) {
    try {
      // Fazer uma requisição de autemticação para o back-end 
      // com o email e a senha
      // Exemplo:
      /*
      let LOGIN_URL = 'SUA URL'

      let response = await axios({
        method: 'post',
        url: LOGIN_URL,
        data: { username: email, password: password }
      }); 
      */

      let response = { status: 200, data: { tokem: 123 }}

      if (response.status == 200) {
        setIsAuthenticated(true)
        setTokem(response.data.tokem)

        loggedUser.name = email;
        loggedUser.tokem = tokem;
        localStorage.setItem("user", JSON.stringify(loggedUser))
      }

      if (response.status == 403) {
        toast.info("Usuario não autorizado", {
          hideProgressBar: true,
          theme: "colored"
        })
        return
      }
    } catch (error) {
      toast.info("Erro ao na authenticação", {
        hideProgressBar: true,
        theme: "colored"
      })
      console.log(error);
    }
  }

  // Retira os dados do usuario do local storage
  async function logout() {
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    setTokem(null)
  }

  // Redireciona o usuario quando estiver logado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('../');
    }
  }, [isAuthenticated, tokem])

  return (
    <AuthContext.Provider value={{
      login, tokem, isAuthenticated, logout, loading
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
