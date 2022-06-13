import React, { useContext, useState } from "react"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { AllContext } from "../Context/AllContext";
const Login = () => {
  const { userPanel } = useContext(AllContext);
  const { setUser } = userPanel;
  const auth = getAuth()
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      login(form.email, form.password)
        .then(({ user }) => setUser({ isLogin: true, email: user.email }))
        .catch(err => setError("Login invalido"))
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) => setForm({ ...form, [name]: value });

  return (
    <div className="container">
      {error && alert(error)}
      <div className="columns is-multiline is-mobile  is-justify-content-center ">
        <div className="column is-6" 
            style={{marginTop:"60px"}}>
          <h1 className="title">Panel</h1>
          <form
            onSubmit={handleSubmit}
            className="box"
          >
            <div className="field">
              <label className="label">Correo</label>
              <div className="control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="input"
                  placeholder="youremail@company.tld"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Contraseña</label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="input"
                  placeholder="*************"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Iniciar Sesión</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login