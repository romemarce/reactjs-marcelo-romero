import React, { useContext, useState } from "react"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
// import { auth } from "firebase";

import { useNavigate } from "react-router-dom"
import { AllContext } from "../Context/AllContext";
const Login = () => {
  const { userPanel } = useContext(AllContext);
  const { setUser } = userPanel;
  const auth = getAuth()

  const navigate = useNavigate();
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
      // navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) => setForm({ ...form, [name]: value });

  return (
    <div className="w-full max-w-xs m-auto">
      {error && alert(error)}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login