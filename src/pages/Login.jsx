import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log("Tentative de connexion avec:", email, password, rememberMe);
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center relative">
      {/* Logo en haut */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-1">
          <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <h1 className="text-xl font-bold text-white">RED PRODUCT</h1>
        </div>
      </div>

      {/* Formulaire de connexion */}
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-8">
        <h2 className="text-lg text-center mb-6">Connectez-vous en tant que Admin</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-gray-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Mot de passe */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-gray-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Case à cocher "Gardez-moi connecté" */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-600"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="ml-2 text-sm">Gardez-moi connecté</span>
            </label>
          </div>
          
          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200"
          >
            Se connecter
          </button>
        </form>
      </div>
      
      {/* Liens en bas */}
      <div className="mt-4 text-center">
        <a href="#" className="text-yellow-500 hover:underline text-sm">Mot de passe oublié?</a>
        <div className="mt-2 text-white text-sm">
          Vous n'avez pas de compte? <a href="MotDePasseOublie" className="text-yellow-500 hover:underline">S'inscrire</a>
        </div>
      </div>
    </div>
  );
};

export default Login;